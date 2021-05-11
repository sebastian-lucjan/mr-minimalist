import { StyledUsageInfo } from 'components/UsageInfo/UsageInfo.styles';
import { DataContext } from 'providers/MinimalistProvider/MinimalistProvider';
import React, { useContext } from 'react';

export const UsageInfo = () => {
  const { usageInfo } = useContext(DataContext);

  return (
    <StyledUsageInfo>
      <div className={'scrollInfo fadeOut'}>{usageInfo}</div>
    </StyledUsageInfo>
  );
};
