import Image from 'next/image';
import styled from 'styled-components';
import { FavoriteIcon } from '../../utils/Icons';

import Button from '../Button';

import {
  Container,
  InlineContainer,
  Category,
  Name,
  Price,
  ImageWrapper,
} from './style';

interface ProductCardProps {
  category?: string;
  name: string;
  price: number;
  imageSrc: string;
  isFavorite?: boolean;
}

const StyledImage = styled(Image)`
  border-radius: 15px;
`;

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const { category, name, price, imageSrc, isFavorite, children } = props;

  return (
    <Container>
      <ImageWrapper>
        <StyledImage
          quality="85"
          src="/assets/images/nike-green-large.jpg"
          layout="fill"
          objectFit="cover"
        />
      </ImageWrapper>
      <Category>Men's Shoe</Category>
      <InlineContainer>
        <Button variant="no-color">
          <Image src={FavoriteIcon} width="24" height="24" />
        </Button>
        <Name>Nike Green XI</Name>
        <Price>$95</Price>
      </InlineContainer>
    </Container>
  );
};

export default ProductCard;
