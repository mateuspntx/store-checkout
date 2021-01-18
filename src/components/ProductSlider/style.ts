import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  position: relative;
  /* width: 523px;
  height: 463px; */

  /* @media (max-width: 615px) {
    width: calc(100% - 35px);
    height: 300px;
  } */
`;

export const StyledImage = styled(Image)`
  border-radius: 15px;
  max-width: 400px;
`;
