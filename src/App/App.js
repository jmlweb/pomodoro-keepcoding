import React from 'react';
import { Provider as StyleProvider } from 'rebass';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import theme from './theme';
import Header from './Header';
import Content from './Content';
import { Home } from '../scenes';

injectGlobal`
  ${normalize()};
  * { box-sizing: border-box; }
  body { margin: 0; }
`;

const App = () => (
  <StyleProvider theme={theme}>
    <Header />
    <BrowserRouter>
      <Content>
        <Route path="/" exact component={Home} />
      </Content>
    </BrowserRouter>
  </StyleProvider>
);

export default App;
