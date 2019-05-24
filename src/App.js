import React, { Fragment } from 'react';

import GlobalStyle from './styles/global';

import { Wrapper, Container, Content } from './styles/components';

import Sidebar from './components/sidebar/';
import Player from './components/player';
import Header from './components/header';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <Header />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </Fragment>
  );
}

export default App;
