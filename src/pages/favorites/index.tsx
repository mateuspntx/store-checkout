import { useSelector } from 'react-redux';
import { StoreState } from '../../store/createStore';

import { Title, H3 } from '../../styles/pages/favorites';

import Header from '../../components/Header';
import PageContainer from '../../components/PageContainer';
import Topbar from '../../components/Topbar';
import Row from '../../components/Row';
import ProductCard from '../../components/ProductCard';

interface ProductMap {
  id: string;
  slug: string;
  name: string;
  price: number;
  images: string[];
}

const Favorites = () => {
  const { favoriteProducts } = useSelector((state: StoreState) => state.user);

  return (
    <>
      <Topbar />
      <PageContainer>
        <Header />
        <Title>
          <h1>Favorites</h1>
        </Title>
        <Row>
          {favoriteProducts.length > 0 ? (
            favoriteProducts.map((product) => (
              <ProductCard
                key={product.id}
                slug={product.slug}
                name={product.name}
                imageSrc={product.images[0]}
              />
            ))
          ) : (
            <H3>No favorite product yet</H3>
          )}
        </Row>
      </PageContainer>
    </>
  );
};

export default Favorites;
