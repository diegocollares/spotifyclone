import { call, put } from 'redux-saga/effects';
import api from '../../service/api';

import { Creators as PlaylistDetailsActions } from '../ducks/playlistDetails';

export function* getPlaylistDetails(action) {
  try {
    const response = yield call(
      api.get,
      `/playlists/${action.payload.id}?_embed=songs`
    );
    yield put(PlaylistDetailsActions.getPlaylistDetailsSuccess(response.data));
  } catch (err) {
    console.log('err', err);
  }
}
