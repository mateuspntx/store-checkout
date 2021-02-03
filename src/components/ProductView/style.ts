import styled from 'styled-components';
import Button from '../../components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductHeader = styled.section`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;

  .product-slider-wrapper {
    max-width: 523px;
  }
`;

export const ProductDetails = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 400px;

  .category {
    color: ${(props) => props.theme.colors.tertiary};
  }

  .size-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme.colors.secondary};

    hr {
      width: 35%;
      background-color: ${(props) => props.theme.colors.quaternary};
      border: 0.5px solid ${(props) => props.theme.colors.quaternary};
    }

    .select-input {
      width: 77px;
    }
  }

  .summary {
    color: ${(props) => props.theme.colors.tertiary};
  }

  .name-and-price-wrapper {
    display: flex;
    justify-content: space-between;
    font-size: 2em;

    .price {
      font-weight: 300;
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    justify-items: center;
  }

  @media (max-width: 615px) {
    gap: 30px 0px;
  }
`;

export const CartButton = styled(Button)`
  padding: 14px 40px;
  font-size: 18px;
`;

export const FavoriteButton = styled(Button)`
  padding: 14px 40px;
`;

export const ProductDescription = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 6.5rem;

  .header > h1 {
    font-size: 24px;
    font-weight: 500;
  }

  .text-body {
    margin-top: 2rem;
  }
`;
