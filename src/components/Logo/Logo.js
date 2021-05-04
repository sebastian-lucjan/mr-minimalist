import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { DataContext } from 'providers/MinimalistProvider/MinimalistProvider';
import { StyledLogo } from './Logo.styles';

export const Logo = () => {
  const { logoText } = useContext(DataContext);
  return (
    <>
      <StyledLogo>{logoText}</StyledLogo>
    </>
  );
};

Logo.propTypes = {
  logoText: PropTypes.string,
};
