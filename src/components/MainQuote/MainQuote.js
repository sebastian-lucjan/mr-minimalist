import PropTypes from 'prop-types';
import React from 'react';
import { StyledMainQuote, Wrapper } from './MainQuote.styles';

const MainQuote = ({ mainQuote: { author, quote } }) => {
  return (
    <Wrapper>
      <StyledMainQuote>
        <h1>{quote}</h1>
        <h2>{author}</h2>
      </StyledMainQuote>
    </Wrapper>
  );
};

MainQuote.propTypes = { mainQuote: PropTypes.object.isRequired };

export default MainQuote;
