import Link from 'next/link';
import Image from 'next/image';

import { FavoriteIcon, FavoriteFilledIcon } from '../../utils/Icons';
import Button from '../Button';

import {
  Container,
  FooterContainer,
  Category,
  Name,
  Price,
  ImageWrapper,
  StyledImage,
} from './style';
import { formatPrice } from '../../utils/formatPrice';

interface ProductCardProps {
  category?: string;
  slug: string;
  name: string;
  price: number;
  imageSrc: string;
  isFavorite?: boolean;
  showFavoriteButton?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const {
    category,
    slug,
    name,
    price,
    imageSrc,
    isFavorite,
    showFavoriteButton,
  } = props;

  return (
    <Link href={`product/${slug}`}>
      <Container className="pointer">
        <ImageWrapper>
          <StyledImage
            quality={85}
            src={imageSrc}
            // @ts-ignore
            layout="fill"
            objectFit="cover"
            loading="eager"
          />
        </ImageWrapper>
        <Category>{category}</Category>
        <FooterContainer>
          {showFavoriteButton &&
            (isFavorite ? (
              <Button variant="no-color">
                <Image src={FavoriteFilledIcon} width={24} height={24} />
              </Button>
            ) : (
              <Button variant="no-color">
                <Image src={FavoriteIcon} width={24} height={24} />
              </Button>
            ))}
          <Name>{name}</Name>
          <Price>{formatPrice(price)}</Price>
        </FooterContainer>
      </Container>
    </Link>
  );
};

export default ProductCard;
