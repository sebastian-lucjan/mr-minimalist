import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: block;
  border: none;
  border-radius: 0;
  color: white;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
  cursor: pointer;
  &::after {
    display: block;
    content: '';
    width: 0px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.lightGray};
    transition: 0.2s;
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }
`;
const Button = ({ title }) => {
  return <StyledButton>{title}</StyledButton>;
};

Button.propTypes = {
  title: PropTypes.string,
};

export default Button;
