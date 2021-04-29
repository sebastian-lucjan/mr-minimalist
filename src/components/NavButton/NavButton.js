import { StyledButton } from 'components/NavButton/NavButton.styles';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = ({ title, path }) => {
  return (
    <NavLink to={path}>
      <StyledButton>{title}</StyledButton>
    </NavLink>
  );
};

Button.propTypes = {
  title: PropTypes.string,
};

export default Button;

// const StyledButton = styled.button`
//   display: block;
//   border: none;
//   border-radius: 0;
//   color: white;
//   height: 40px;
//   padding: 10px;
//   background-color: ${({ theme }) => theme.colors.black};
//   text-transform: uppercase;
//   cursor: pointer;
//   &::after {
//     display: block;
//     content: '';
//     width: 0px;
//     height: 2px;
//     background-color: ${({ theme }) => theme.colors.lightGray};
//     transition: 0.2s;
//   }
//   &:hover {
//     &::after {
//       width: 100%;
//     }
//   }
// `;
