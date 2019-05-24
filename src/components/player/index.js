import React from 'react';
import { Container, Currrent, Volume } from './style';

import VolumeIcon from '../../assets/images/volume.svg';

const Player = () => (
  <Container>
    <Currrent>
      <img
        src="https://cdnb.artstation.com/p/assets/images/images/013/075/341/large/raphael-phillips-screen01.jpg?1537940196"
        alt="Cover"
      />

      <div>
        <span>Trapper black</span>
        <small>Liw Beng</small>
      </div>
    </Currrent>

    <Volume>
      <img src={VolumeIcon} alt="Volume" />
    </Volume>
  </Container>
);

export default Player;
