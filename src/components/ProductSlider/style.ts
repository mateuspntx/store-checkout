import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  position: relative;
  max-width: 523px;
  width: 100vw;

  @media (max-width: 620px) {
    width: calc(100vw - 90px);
  }
`;

export const StyledImage = styled(Image)`
  border-radius: 15px;
  max-width: 523px;
`;
