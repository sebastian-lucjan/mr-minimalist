import React from 'react';
import PropTypes from 'prop-types';
import { StyledLogo } from './Logo.styles';

export const Logo = ({ logoText }) => {
  return (
    <>
      <StyledLogo>{logoText}</StyledLogo>
    </>
  );
};

Logo.propTypes = {
  logoText: PropTypes.string,
};
