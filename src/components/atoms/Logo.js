import React from 'react';
import PropTypes from 'prop-types';

export const Logo = ({ logoText }) => {
  return (
    <>
      <h1>{logoText}</h1>
    </>
  );
};

Logo.propTypes = {
  logoText: PropTypes.string,
};
