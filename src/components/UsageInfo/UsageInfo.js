import React from 'react';
import PropTypes from 'prop-types';
import { StyledUsageInfo } from 'components/UsageInfo/UsageInfo.styles';

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
