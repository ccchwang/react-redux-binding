import {
  RECEIVE_GENRE,
  RECEIVE_GENRE_SONGS
} from '../constants';


const initialGenreState = {
  genres: [],
  genreSongs: []
};

export default function (state = initialGenreState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_GENRE:
      newState.genres = action.genres;
      break;

    case RECEIVE_GENRE_SONGS:
      newState.genreSongs = action.genreSongs;
      break;

    default:
      return state;

  }

  return newState;

}
