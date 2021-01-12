import styled from 'styled-components';

const Bar = styled.div`
  position: absolute;
  width: 100vw;
  height: 5px;
  background: ${(props) => props.theme.colors.gradient.primary};
`;

const Topbar: React.FC = () => {
  return <Bar />;
};

export default Topbar;
