import PropTypes from 'prop-types';
import NavButton from 'components/NavButton/NavButton';
import React from 'react';

const Navigation = ({ navigationButtons }) => {
  const navButtons = navigationButtons.map((navButon, index) => (
    <NavButton key={index} title={navButon} />
  ));

  return <nav>{navButtons}</nav>;
};

Navigation.propTypes = { navigationButtons: PropTypes.array.isRequired };

export default Navigation;
