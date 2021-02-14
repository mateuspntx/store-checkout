import Slider from 'react-slick';

import { Container, StyledImage } from './style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Props {
  images: Array<string>;
  width: number;
  height: number;
}

const ProductSlider: React.FC<Props> = ({ images, width, height }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <Slider {...sliderSettings}>
        {images &&
          images.map((image) => (
            <div>
              {
                <StyledImage
                  quality={85}
                  src={image}
                  objectFit="cover"
                  width={width}
                  height={height}
                  loading="eager"
                />
              }
            </div>
          ))}
      </Slider>
    </Container>
  );
};

export default ProductSlider;
