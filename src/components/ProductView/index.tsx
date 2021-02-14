import Select from 'react-select';
import Image from 'next/image';

import { StoreState } from '../../store/createStore';
import { useDispatch, useSelector } from 'react-redux';

import { useTheme } from 'styled-components';

import {
  addFavoriteProduct,
  deleteFavoriteProduct,
} from '../../store/modules/user/actions';

import ProductSlider from '../../components/ProductSlider';
import formatPrice from '../../utils/formatPrice';

import { FavoriteIcon, FavoriteFilledIcon } from '../../utils/Icons';

import {
  Container,
  ProductHeader,
  ProductDetails,
  CartButton,
  FavoriteButton,
  ProductDescription,
} from './style';
import Product from '../../pages/product/[slug]';

type Product = {
  id: string;
  slug: string;
  images: Array<string>;
  category: string;
  name: string;
  price: number;
  sizes: Array<number>;
  short_description: string;
  long_description: string;
};
interface Props {
  product: Product;
}

const ProductView: React.FC<Props> = ({ product }) => {
  const globalTheme = useTheme();

  const dispatch = useDispatch();

  const { favoriteProducts } = useSelector((state: StoreState) => state.user);

  const isFavorite = favoriteProducts.find(
    (favorite) => product.id === favorite.id
  );

  const productSizes = product?.sizes.map((size) => {
    return {
      value: size,
      label: size,
    };
  });

  return (
    <Container>
      <ProductHeader>
        <div className="product-slider-wrapper">
          <ProductSlider images={product?.images} width={523} height={463} />
        </div>
        <ProductDetails>
          <div className="header">
            <p className="category">{product?.category}</p>
            <div className="name-and-price-wrapper">
              <h1>{product?.name}</h1>
              <h1 className="price">{formatPrice(product?.price)}</h1>
            </div>
          </div>
          <div className="size-wrapper">
            <h4>Select Size</h4>
            <hr />
            <Select
              instanceId="product-size"
              className="select-input"
              defaultValue={product && productSizes[0]}
              options={productSizes}
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary: `${globalTheme.colors.green}`,
                },
              })}
            />
          </div>
          <div className="summary">
            <p>{product?.short_description}</p>
          </div>
          <div className="footer">
            <CartButton variant="gray" rounded className="pointer">
              Add to cart
            </CartButton>
            {isFavorite ? (
              <FavoriteButton
                variant="no-color"
                onClick={() =>
                  dispatch(
                    deleteFavoriteProduct({
                      id: product.id,
                    })
                  )
                }
              >
                <Image src={FavoriteFilledIcon} width={24} height={24} />
              </FavoriteButton>
            ) : (
              <FavoriteButton
                variant="no-color"
                onClick={() =>
                  dispatch(
                    addFavoriteProduct({
                      id: product.id,
                      name: product.name,
                      slug: product.slug,
                      images: product.images,
                    })
                  )
                }
              >
                <Image src={FavoriteIcon} width={24} height={24} />
              </FavoriteButton>
            )}
          </div>
        </ProductDetails>
      </ProductHeader>
      <ProductDescription>
        <div className="header">
          <h1>Product Details</h1>
        </div>
        <div className="text-body">
          <p>{product?.long_description}</p>
        </div>
      </ProductDescription>
    </Container>
  );
};

export default ProductView;
