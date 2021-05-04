import Button from 'components/NavButton/NavButton';
import { StyledNavigation } from 'components/Navigation/Navigation.styles';
import React, { useContext } from 'react';
import { DataContext } from 'providers/MinimalistProvider/MinimalistProvider';

const Navigation = () => {
  const { navigationButtons } = useContext(DataContext);

  const navButtons = navigationButtons.map((navButon, index) => (
    <Button key={index} title={navButon.name} path={navButon.path} />
  ));

  return <StyledNavigation>{navButtons}</StyledNavigation>;
};

export default Navigation;
