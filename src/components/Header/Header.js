import React from 'react';
import { Logo } from 'components/atoms/Logo';
import Navigation from 'components/Navigation/Navigation';

export const Header = () => {
  return (
    <header>
      <Logo />
      <Navigation />
    </header>
  );
};
