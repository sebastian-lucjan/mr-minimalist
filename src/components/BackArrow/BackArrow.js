import backArrowIcon from 'assets/icons/left-arrow.png';
import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledBackArrow = styled.div`
  height: 40px;
  width: 40px;
  margin-right: 10px;
  img {
    height: 100%;
    padding: 10px 0;
    transform: rotate(90deg);
    cursor: pointer;
  }
`;

export const BackArrow = (props) => {
  return (
    <StyledBackArrow>
      <img src={backArrowIcon} alt="backToStart" />
    </StyledBackArrow>
  );
};

BackArrow.propTypes = {};
