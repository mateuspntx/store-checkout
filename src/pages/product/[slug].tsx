import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getAllProducts } from '../services/api';

const Product = (product: any) => {
  const { isFallback } = useRouter();

  isFallback && <h1>Loading...</h1>;

  return <div>{product}</div>;
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
  const products = await getAllProducts();

  const product = products.map((product) => product.slug);

  return {
    props: {
      product,
    },
    revalidate: 10,
  };
};

export default Product;
