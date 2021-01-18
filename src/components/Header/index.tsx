import Image from 'next/image';
import Link from 'next/link';
import { FavoriteIcon, ShoppingBagIcon } from '../../utils/Icons';
import { Container, LogoContainer, ActionsContainer } from './style';

import Button from '../../components/Button';

const Header: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <Link href="/">
          <h1>Storrr</h1>
        </Link>
      </LogoContainer>
      <ActionsContainer>
        <Button variant="no-color">
          <Image
            src={FavoriteIcon}
            alt="Favorites"
            width="32"
            height="32"
            priority
          />
        </Button>
        <Button variant="no-color">
          <Image
            src={ShoppingBagIcon}
            alt="Cart"
            width="32"
            height="32"
            priority
          />
        </Button>
      </ActionsContainer>
    </Container>
  );
};

export default Header;
