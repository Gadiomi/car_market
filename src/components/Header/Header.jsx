import {
  HeaderContainer,
  HeaderNavigation,
  HeaderLink,
  HeaderLogo,
} from './Header.styled';
import logo from '../../images/logo.png';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <img src={logo} alt="logo images" width={100} height={100} />
      </HeaderLogo>
      <HeaderNavigation>
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/catalog">Catalog</HeaderLink>
        <HeaderLink to="/favorite">Favorite</HeaderLink>
      </HeaderNavigation>
    </HeaderContainer>
  );
};
