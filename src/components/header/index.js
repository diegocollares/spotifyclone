import React from 'react';

import { Container, Search, User } from './style';

const Header = () => (
  <Container>
    <Search>
      <input type="text" placeholder="busca" />
    </Search>

    <User>
      <img
        src="https://avatars0.githubusercontent.com/u/212854?v=4"
        alt="Diego Collares"
      />
      Diego Collares
    </User>
  </Container>
);

export default Header;
