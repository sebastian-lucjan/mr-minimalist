import React from 'react';
import PropTypes from 'prop-types';

const MainQuote = ({ mainQuote }) => {
  return <h1>{mainQuote}</h1>;
};

MainQuote.propTypes = { mainQuote: PropTypes.string.isRequired };

export default MainQuote;
