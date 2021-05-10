import { AboutView } from 'components/AboutView/AboutView';
import { ContactView } from 'components/ContactView/ContactView';
import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { IntroSection } from 'components/IntroSection/IntroSection';
import { MainQuote } from 'components/MainQuote/MainQuote';
import { MainView } from 'components/MainView/MainView';
import { UsageInfo } from 'components/UsageInfo/UsageInfo';
import { MinimalistProvider } from 'providers/MinimalistProvider/MinimalistProvider';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Wrapper } from 'views/Root.styles';
import { theme } from '../../src/assets/styles/theme';
import { GlobalStyle } from '../assets/styles/GlobalStyle';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MinimalistProvider>
          <Wrapper>
            <Header />
            <Switch>
              <Route path="/" exact>
                <MainView>
                  <MainQuote />
                  <UsageInfo />
                  <IntroSection />
                </MainView>
              </Route>

              <Route path="/about">
                <AboutView />
              </Route>
              <Route path="/contact">
                <ContactView />
              </Route>
            </Switch>
            <Footer />
          </Wrapper>
        </MinimalistProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
