import React from 'react';
import PropTypes from 'prop-types';

export const UsageInfo = ({ usageInfo }) => {
  return (
    <aside>
      <div>{usageInfo}</div>
    </aside>
  );
};

UsageInfo.propTypes = {
  usageInfo: PropTypes.string.isRequired,
};

// Navigation.propTypes = { navigationButtons: PropTypes.array };
// logoText: 'minimalist',
//   mainQuote: 'functionality and minimalism',
//   navigationButtons: ['about', 'contact'],
//   usageInfo: 'scroll down',
