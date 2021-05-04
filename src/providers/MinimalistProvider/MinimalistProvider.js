import React from 'react';
import { introTextsObj, webConstantTexts } from 'data/appTextData';

export const DataContext = React.createContext({
  introTextsObj: {},
  webConstantTexts: {},
  logoText: '',
  navigationButtons: [],
  usageInfo: '',
});

export const MinimalistProvider = ({ children }) => {
  const { mainQuote } = introTextsObj;
  const { logoText, navigationButtons, usageInfo } = webConstantTexts;
  return (
    <DataContext.Provider
      value={{
        introTextsObj,
        webConstantTexts,
        logoText,
        navigationButtons,
        usageInfo,
        mainQuote,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
