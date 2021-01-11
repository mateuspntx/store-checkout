import Image from 'next/image';
import { FavoriteIcon, ShoppingBagIcon } from '../../utils/Icons';
import { Container, LogoContainer, ActionsContainer } from './style';

const Header: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <h1>Storrr</h1>
      </LogoContainer>
      <ActionsContainer>
        <Image src={FavoriteIcon} alt="Favorites" width="32" height="32" />
        <Image src={ShoppingBagIcon} alt="Cart" width="32" height="32" />
      </ActionsContainer>
    </Container>
  );
};

export default Header;
