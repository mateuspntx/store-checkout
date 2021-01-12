import styled from 'styled-components';

export const Container = styled.div`
  /* width: 272px; */
`;

export const InlineContainer = styled.div`
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
  color: #676767;
  margin-bottom: 10px;
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
