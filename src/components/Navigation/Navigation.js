import React from 'react';
import PropTypes from 'prop-types';
import NavButton from 'components/NavButton/NavButton';

const Navigation = (props) => {
  return (
    <nav>
      <NavButton />
      <NavButton />
      <NavButton />
    </nav>
  );
};

Navigation.propTypes = {};

export default Navigation;
