import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledUsageInfo = styled.aside`
  position: absolute;
  top: 50%;
  right: 0;
  transform: rotate(270deg);
`;

export const UsageInfo = ({ usageInfo }) => {
  return (
    <StyledUsageInfo>
      <div>{usageInfo}</div>
    </StyledUsageInfo>
  );
};

UsageInfo.propTypes = {
  usageInfo: PropTypes.string.isRequired,
};
