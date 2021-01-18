import React from 'react';
import { Container, StyledImage } from './style';

interface Props {
  images: Array<string>;
  width: number;
  height: number;
}

const ProductSlider: React.FC<Props> = ({ images, width, height }) => {
  return (
    <Container>
      <StyledImage
        quality={85}
        src={images[0]}
        objectFit="cover"
        width={width}
        height={height}
        loading="eager"
      />
    </Container>
  );
};

export default ProductSlider;
