import React from 'react';
import { Provider as StyleProvider } from 'rebass';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import { BrowserRouter, Route } from 'react-router-dom';
import theme from './theme';
import { Main, Header, Content } from '../layout';
import { Home, Settings } from '../scenes';

injectGlobal`
  ${normalize()};
  * { box-sizing: border-box; }
  body { margin: 0; }
`;

const App = () => (
  <StyleProvider theme={theme}>
    <BrowserRouter>
      <Main>
        <Header />
        <Content>
          <Route path="/" exact component={Home} />
          <Route path="/settings" component={Settings} />
        </Content>
      </Main>
    </BrowserRouter>
  </StyleProvider>
);

export default App;
