import React from 'react';
import {
  introTextsObj,
  webConstantTexts,
  contactTexts,
  aboutText,
} from 'data/appTextData';

export const DataContext = React.createContext({
  introTextsObj: {},
  webConstantTexts: {},
  contactTexts: {},
  logoText: '',
  navigationButtons: [],
  usageInfo: '',
  mainQuote: '',
  aboutText: '',
});

export const MinimalistProvider = ({ children }) => {
  const { mainQuote } = introTextsObj;
  const { logoText, navigationButtons, usageInfo } = webConstantTexts;
  return (
    <DataContext.Provider
      value={{
        introTextsObj,
        webConstantTexts,
        contactTexts,
        logoText,
        navigationButtons,
        usageInfo,
        mainQuote,
        aboutText,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
