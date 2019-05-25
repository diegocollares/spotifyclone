import React from 'react';
import { Link } from 'react-router-dom';

import { Container, NewPlayList, Nav } from './style';

import AddPlayListIcon from '../../assets/images/add_playlist.svg';

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <Link to="/">Navegar</Link>
        </li>
        <li>
          <a href="#">Rádio</a>
        </li>
      </Nav>
      <Nav>
        <li>
          <span>Sua biblioteca</span>
        </li>
        <li>
          <a href="#">Seu Daily Mix</a>
        </li>
        <li>
          <a href="#">Tocadas recentementes</a>
        </li>
        <li>
          <a href="#">Músicas</a>
        </li>
        <li>
          <a href="#">Albums</a>
        </li>
        <li>
          <a href="#">Artistas</a>
        </li>
        <li>
          <a href="#">Estações</a>
        </li>
        <li>
          <a href="#">Arquivos</a>
        </li>
        <li>
          <a href="#">Vídeos</a>
        </li>
        <li>
          <a href="#">Podcast</a>
        </li>
      </Nav>
      <Nav>
        <li>
          <span>Playlist</span>
        </li>

        <li>
          <a href="#">Trap Brasil</a>
        </li>
        <li>
          <a href="#">Melhores do Rock</a>
        </li>
      </Nav>
    </div>
    <NewPlayList>
      <img src={AddPlayListIcon} alt="Adicionar Nova Playlkst" />
      Nova playlist
    </NewPlayList>
  </Container>
);

export default Sidebar;
