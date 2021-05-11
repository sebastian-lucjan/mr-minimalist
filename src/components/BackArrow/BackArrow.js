import backArrowIcon from 'assets/icons/left-arrow.png';
import React from 'react';
import { StyledBackArrow } from 'components/BackArrow/BackArrow.styles';
import { NavLink } from 'react-router-dom';

export const BackArrow = ({ onClick }) => {
  return (
    <NavLink to="/" exact>
      {/* TODO zmień z przenoszenia na ścieżkę na animację przenoszenia na górę strony z dość szybkim transition */}
      <StyledBackArrow>
        <img onClick={onClick} src={backArrowIcon} alt="backToStart" />
      </StyledBackArrow>
    </NavLink>
  );
};
