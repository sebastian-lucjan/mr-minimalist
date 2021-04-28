import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { IntroSection } from 'components/IntroSection/IntroSection';
import MainQuote from 'components/MainQuote/MainQuote';
import { UsageInfo } from 'components/UsageInfo/UsageInfo';
import { introTextsObj, webConstantTexts } from 'data/appTextData';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Wrapper } from 'views/Root.styles';
import { theme } from '../../src/assets/styles/theme';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { MainView } from 'components/MainView/MainView';

const App = () => {
  const { mainQuote } = introTextsObj;
  const { logoText, navigationButtons, usageInfo } = webConstantTexts;

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Header logoText={logoText} navigationButtons={navigationButtons} />

          <MainView>
            <MainQuote mainQuote={mainQuote} />
            <UsageInfo usageInfo={usageInfo} />
            <IntroSection introTextsObj={introTextsObj} />
          </MainView>

          <Footer />
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default App;

//
//
//
//
//
//
//
//
//
//
//
//
//
// export const introTextsObj= {
//   intro:
//     "My name is Sebastian. I'm based in Lublin, Poland, but I work with the whole world.",
//   textUnderIntro:
//     'Using the minimalism and aesthetics I help projects and businesses achieve their goals.',
//   purposeIntroText: 'The purpose of my work',
//   purposeText:
//     'Clean and aesthetic design immediately inspires confidence in people and users become more loyal to the brand on first visiting.',
//   minimalismRules: [
//     'In minimalism functionality always comes first. Every detail works for the final result.',
//     "All unnecessary is removed. All that remains is the focus on what's important to your brand.",
//     'All designs have different goals and tasks. Every business or project needs a website to solve their own unique challenges.',
//   ],
//   importantThings: [
//     'The most important thing for me in my work is to understand the client’s tasks, and offer the most relevant solution.',
//     'Minimalism and aesthetics are my tools which I do best with.',
//   ],
// },
// };

// export const webConstantTexts = {
// logoText: 'minimalist',
// mainQuote: {
//   quote:
//     '“There are two ways to be rich: One is by acquiring much, and the other is by desiring little.”',
//   author: 'Jackie French Koller',
// },
// navigationButtons: ['about', 'contact'],
// usageInfo: 'scroll down',
// footer: {
//   socialMedia: ['behance', 'facebook', 'instagram'],
//   footerNav: ['main', 'about', 'contact'],
// },
// };
