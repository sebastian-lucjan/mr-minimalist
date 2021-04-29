import backArrowIcon from 'assets/icons/left-arrow.png';
import React from 'react';
import { StyledBackArrow } from 'components/BackArrow/BackArrow.styles';
import { NavLink } from 'react-router-dom';

export const BackArrow = () => {
  return (
    <NavLink to="/" exact>
      <StyledBackArrow>
        <img src={backArrowIcon} alt="backToStart" />
      </StyledBackArrow>
    </NavLink>
  );
};
