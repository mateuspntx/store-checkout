import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { getAllProducts, getProduct } from '../../services/api';
import PageContainer from '../../components/PageContainer';
import Topbar from '../../components/Topbar';
import Header from '../../components/Header';
import ProductView from '../../components/ProductView';

const Product = ({ product, error }) => {
  const router = useRouter();

  router.isFallback && <h1>Loading...</h1>;

  return (
    <>
      <Topbar />
      <PageContainer>
        <Header />
        {error ? (
          <h1>Product not found...</h1>
        ) : (
          <ProductView product={product} />
        )}
      </PageContainer>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getAllProducts();

  const paths = products.map((product: any) => {
    return { params: { slug: product.slug } };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  let error = false;

  const product = await getProduct(slug);

  if (product.message) {
    error = true;
  }

  return {
    props: {
      product,
      error,
    },
    revalidate: 10,
  };
};

export default Product;
