import Image from 'next/image';
import styled from 'styled-components';

export const StyledImage = styled(Image)`
  border-radius: 15px;
`;

// Blank for a while
export const Container = styled.div``;

export const FooterWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 241px;
  margin-bottom: 19.2px;
`;

export const Category = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.colors.tertiary};
  margin-bottom: 10px;
  font-weight: 400;
`;

export const Name = styled.h1`
  font-size: 24px;
  font-weight: 500;
  flex: 1 auto;
`;

export const Price = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
