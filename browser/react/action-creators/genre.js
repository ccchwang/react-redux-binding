import { RECEIVE_GENRE, RECEIVE_GENRE_SONGS } from '../constants';
import axios from 'axios';

export const receiveGenre = genres => ({
  type: RECEIVE_GENRE,
  genres
})

export const receiveGenreSongs = genreSongs => ({
  type: RECEIVE_GENRE_SONGS,
  genreSongs
})


export const loadStationSongs = genreId => {

  return dispatch => {
    axios.get(`/api/genre/${genreId}/songs`)
      .then(response => {
        dispatch(receiveGenreSongs(response.data));
      });
  };

};
