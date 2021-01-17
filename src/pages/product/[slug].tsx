import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { getAllProducts, getProduct } from '../../services/api';
import PageContainer from '../../components/PageContainer';
import Topbar from '../../components/Topbar';
import Header from '../../components/Header';
import ProductView from '../../components/ProductView';

const Product = ({ product }) => {
  const { isFallback } = useRouter();

  isFallback && <h1>Loading...</h1>;

  return (
    <>
      <Topbar />
      <PageContainer>
        <Header />
        <ProductView product={product} />
      </PageContainer>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getAllProducts();

  const paths = products.map((product: any) => {
    return { params: { slug: product.slug } };
  });

  console.log(paths);

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const product = await getProduct(slug);

  return {
    props: {
      product,
    },
    revalidate: 10,
  };
};

export default Product;
