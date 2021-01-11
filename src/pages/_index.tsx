import { useState } from 'react';
import { getAllProducts } from '../services/api';

interface Props {
  productsList: Array<any>;
}

const Home: React.FC<Props> = ({ productsList }) => {
  const [products, setProducts] = useState(productsList);

  return (
    <div>
      {products.map((product) => (
        <h1>{product.name}</h1>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const productsList = await getAllProducts();

  return {
    props: {
      productsList,
    },
  };
};

export default Home;
