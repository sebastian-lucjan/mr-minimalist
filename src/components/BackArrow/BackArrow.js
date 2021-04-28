import backArrowIcon from 'assets/icons/left-arrow.png';
import React from 'react';
import { StyledBackArrow } from 'components/BackArrow/BackArrow.styles';

export const BackArrow = () => {
  return (
    <StyledBackArrow>
      <img src={backArrowIcon} alt="backToStart" />
    </StyledBackArrow>
  );
};
