import React, { useContext } from 'react';
import { DataContext } from 'providers/MinimalistProvider/MinimalistProvider';
import { StyledMainQuote } from './MainQuote.styles';

export const MainQuote = () => {
  const { mainQuote } = useContext(DataContext);
  const { author, quote } = mainQuote;

  return (
    <StyledMainQuote>
      <div>
        <h1>{quote}</h1>
        <h2>{author}</h2>
      </div>
    </StyledMainQuote>
  );
};
