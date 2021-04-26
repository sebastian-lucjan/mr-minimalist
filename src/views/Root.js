import { Header } from 'components/Header/Header';
import MainQuote from 'components/MainQuote/MainQuote';
import { UsageInfo } from 'components/UsageInfo/UsageInfo';
import { appTextData } from 'data/appTextData';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../src/assets/styles/theme';
import { GlobalStyle } from '../assets/styles/GlobalStyle';

const Wrapper = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(40px, auto) 1fr auto;
`;

const App = () => {
  const { logoText, mainQuote, navigationButtons, usageInfo } = appTextData;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Header logoText={logoText} navigationButtons={navigationButtons} />
        <MainQuote mainQuote={mainQuote} />
        <UsageInfo usageInfo={usageInfo} />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
