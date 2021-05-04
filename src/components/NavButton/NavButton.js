import { StyledButton } from 'components/NavButton/NavButton.styles';
import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ title, path }) => {
  return (
    <StyledButton exact to={path}>
      {title}
    </StyledButton>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
};

export default Button;
