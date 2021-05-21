import backArrowIcon from 'assets/icons/left-arrow.png';
import React from 'react';
import { StyledBackArrow } from 'components/BackArrow/BackArrow.styles';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const BackArrow = ({ onClick }) => {
  return (
    <NavLink to="/" exact>
      <StyledBackArrow>
        <img onClick={onClick} src={backArrowIcon} alt="backToStart" />
      </StyledBackArrow>
    </NavLink>
  );
};

BackArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};
