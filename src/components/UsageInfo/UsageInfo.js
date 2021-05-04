import { StyledUsageInfo } from 'components/UsageInfo/UsageInfo.styles';
import React, { useContext } from 'react';
import { DataContext } from 'providers/MinimalistProvider/MinimalistProvider';

export const UsageInfo = () => {
  const { usageInfo } = useContext(DataContext);
  return (
    <StyledUsageInfo>
      <div>{usageInfo}</div>
    </StyledUsageInfo>
  );
};
