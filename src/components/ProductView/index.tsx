import Select from 'react-select';
import { useTheme } from 'styled-components';

import ProductSlider from '../../components/ProductSlider';
import formatPrice from '../../utils/formatPrice';

import { Container, ProductHeader, ProductDetails, CartButton } from './style';

interface Props {
  product: {
    id: string;
    images: Array<string>;
    category: string;
    name: string;
    price: number;
    sizes: Array<number>;
    short_description: string;
  };
}

const ProductView: React.FC<Props> = ({ product }) => {
  const globalTheme = useTheme();

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
          </div>
        </ProductDetails>
      </ProductHeader>
    </Container>
  );
};

export default ProductView;
