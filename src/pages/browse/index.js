import React from 'react';
import { Container, Title, List, Playlist } from './style';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://cdnb.artstation.com/p/assets/images/images/013/075/341/large/raphael-phillips-screen01.jpg?1537940196"
          alt="Playlist"
        />
        <strong>O melhor do trap mundial</strong>
        <p>Essa seleção com o melhor do trap vai fazer voÇe surfar no Hype</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://cdnb.artstation.com/p/assets/images/images/013/075/341/large/raphael-phillips-screen01.jpg?1537940196"
          alt="Playlist"
        />
        <strong>O melhor do trap mundial</strong>
        <p>Essa seleção com o melhor do trap vai fazer voÇe surfar no Hype</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://cdnb.artstation.com/p/assets/images/images/013/075/341/large/raphael-phillips-screen01.jpg?1537940196"
          alt="Playlist"
        />
        <strong>O melhor do trap mundial</strong>
        <p>Essa seleção com o melhor do trap vai fazer voÇe surfar no Hype</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://cdnb.artstation.com/p/assets/images/images/013/075/341/large/raphael-phillips-screen01.jpg?1537940196"
          alt="Playlist"
        />
        <strong>O melhor do trap mundial</strong>
        <p>Essa seleção com o melhor do trap vai fazer voÇe surfar no Hype</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
