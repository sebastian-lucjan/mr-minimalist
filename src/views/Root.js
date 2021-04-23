import { Header } from 'components/Header/Header';
import MainQuote from 'components/MainQuote/MainQuote';
import { UsageInfo } from 'components/UsageInfo/UsageInfo';
import { appTextData } from 'data/appTextData';
import React from 'react';
import './Root.css';

const App = () => {
  const { logoText, mainQuote, navigationButtons, usageInfo } = appTextData;
  return (
    <div className="app">
      <Header logoText={logoText} navigationButtons={navigationButtons} />
      <MainQuote mainQuote={mainQuote} />
      <UsageInfo usageInfo={usageInfo} />
    </div>
  );
};

export default App;
