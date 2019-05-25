import React from 'react';

import { Container, Header, Songlist } from './style';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

console.tron.log('BRAZIL =>', new Date());

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://cdnb.artstation.com/p/assets/images/images/013/075/341/large/raphael-phillips-screen01.jpg?1537940196"
        alt="Playlist"
      />

      <div>
        <span>PLAYLIST</span>
        <h1>Trap forever</h1>
        <p>13 músucas</p>

        <button>PLAY</button>
      </div>
    </Header>

    <Songlist cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>
          <th />
          <th>Titulo</th>
          <th>Artista</th>
          <th>Album</th>
          <th>
            <img src={ClockIcon} alt="Duração" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar playlist" />
          </td>
          <td>Mamy of code</td>
          <td>Liw Black</td>
          <td>Trapstar</td>
          <td>3:34</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar playlist" />
          </td>
          <td>Mamy of code</td>
          <td>Liw Black</td>
          <td>Trapstar</td>
          <td>3:34</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar playlist" />
          </td>
          <td>Mamy of code</td>
          <td>Liw Black</td>
          <td>Trapstar</td>
          <td>3:34</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar playlist" />
          </td>
          <td>Mamy of code</td>
          <td>Liw Black</td>
          <td>Trapstar</td>
          <td>3:34</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar playlist" />
          </td>
          <td>Mamy of code</td>
          <td>Liw Black</td>
          <td>Trapstar</td>
          <td>3:34</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar playlist" />
          </td>
          <td>Mamy of code</td>
          <td>Liw Black</td>
          <td>Trapstar</td>
          <td>3:34</td>
        </tr>
      </tbody>
    </Songlist>
  </Container>
);

export default Playlist;
