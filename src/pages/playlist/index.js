import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';

import { Container, Header, Songlist } from './style';

import Loading from '../../components/loading';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

class Playlist extends Component {
  static propTypes = {
    match: PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
    getPlaylistDetailsRequest: PropTypes.func.isRequired,
    playlistDetails: PropTypes.shape({
      data: {
        thumbnail: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        songs: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            author: PropTypes.string,
            album: PropTypes.string,
          })
        ),
      },
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    this.loadPlaylistDetails();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadPlaylistDetails();
    }
  }

  loadPlaylistDetails = () => {
    const { id } = this.props.match.params;
    this.props.getPlaylistDetailsRequest(id);
  };

  renderDetails = () => {
    const playlist = this.props.playlistDetails.data;
    return (
      <Container>
        <Header>
          <img src={playlist.thumbnail} alt={playlist.title} />

          <div>
            <span>PLAYLIST</span>
            <h1>{playlist.title}</h1>
            {!!playlist.songs && (
              <p>
                {playlist.songs.length}{' '}
                {playlist.songs.length > 1 ? `músicas` : `música`}
              </p>
            )}

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
            {!playlist.songs ? (
              <tr>
                <td colSpan={5}>Nehuma música cadastrada</td>
              </tr>
            ) : (
              playlist.songs.map(song => (
                <tr key={song.id}>
                  <td>
                    <img src={PlusIcon} alt="Adicionar playlist" />
                  </td>
                  <td>{song.title}</td>
                  <td>{song.author}</td>
                  <td>{song.album}</td>
                  <td>3:34</td>
                </tr>
              ))
            )}
          </tbody>
        </Songlist>
      </Container>
    );
  };
  render() {
    return this.props.playlistDetails.loading ? (
      <Container loading>
        <Loading />
      </Container>
    ) : (
      this.renderDetails()
    );
  }
}

const mapStateToProps = state => ({
  playlistDetails: state.playlistDetails,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistDetailsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
