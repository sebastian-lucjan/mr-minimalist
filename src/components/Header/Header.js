import { StyledHeader } from 'components/Header/Header.styles';
import { Logo } from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Navigation />
    </StyledHeader>
  );
};
