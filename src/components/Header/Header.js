import { Logo } from 'components/atoms/Logo';
import Navigation from 'components/Navigation/Navigation';
import PropTypes from 'prop-types';
import React from 'react';

export const Header = (props) => {
  return (
    <header>
      <Logo logoText={props.logoText} />

      <Navigation navigationButtons={props.navigationButtons} />
    </header>
  );
};

Header.propTypes = {
  logoText: PropTypes.string.isRequired,
  navigationButtons: PropTypes.array.isRequired,
};
