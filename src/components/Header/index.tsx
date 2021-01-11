import Image from 'next/image';
import { FavoriteIcon, ShoppingBagIcon } from '../../utils/Icons';
import { Container, LogoContainer, ActionsContainer } from './style';

import Button from '../../components/Button';

const Header: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <h1>Storrr</h1>
      </LogoContainer>
      <ActionsContainer>
        <Button variant="no-color">
          <Image src={FavoriteIcon} alt="Favorites" width="32" height="32" />
        </Button>
        <Button variant="no-color">
          <Image src={ShoppingBagIcon} alt="Cart" width="32" height="32" />
        </Button>
      </ActionsContainer>
    </Container>
  );
};

export default Header;
