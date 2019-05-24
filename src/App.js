import React, { Fragment } from 'react';

import GlobalStyle from './styles/global';

import { Wrapper, Container } from './styles/components';

import Sidebar from './components/sidebar/';
import Player from './components/player';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Sidebar />
        </Container>
        <Player />
      </Wrapper>
    </Fragment>
  );
}

export default App;
