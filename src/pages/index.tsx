import { useState } from 'react';
import { getAllProducts } from '../services/api';

import Topbar from '../components/Topbar';
import PageContainer from '../components/PageContainer';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Row from '../components/Row';

interface ProductsListData {
  id: string;
  category: string;
  name: string;
  price: number;
  image_uri: string;
}
interface HomeProps {
  productsListData: ProductsListData[];
}

const Home: React.FC<HomeProps> = ({ productsListData }) => {
  return (
    <>
      <Topbar />
      <PageContainer>
        <Header />
        <Row>
          {productsListData.map((product) => (
            <ProductCard
              key={product.id}
              category={product.category}
              name={product.name}
              price={product.price}
              imageSrc={product.image_uri}
            />
          ))}
        </Row>
      </PageContainer>
    </>
  );
};

export const getStaticProps = async () => {
  const productsListData = (await getAllProducts()) || [];

  return {
    props: {
      productsListData,
    },
  };
};

export default Home;
