import styled from 'styled-components';

const Bar = styled.div`
  position: absolute;
  width: 100vw;
  height: 5px;
  background: linear-gradient(90deg, #003d4d 0%, #00c996 100%);
`;

const Topbar: React.FC = () => {
  return <Bar />;
};

export default Topbar;
