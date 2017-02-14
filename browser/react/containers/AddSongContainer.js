'use strict';

import React from 'react';
import {connect} from 'react-redux';
import AddSong from '../components/AddSong';
import {loadAllSongs, addSongToPlaylist} from '../action-creators/playlists';

export default connect(
  state => {
    return Object.assign({}, state.playlists);
  },
  dispatch => {
    return {
      loadSongs: () => { dispatch(loadAllSongs()); },
      addSongToPlaylist: (playlistId, songId) => {
        dispatch(addSongToPlaylist(playlistId, songId))
      }
    };
  }
)(class extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({
      songId: 1,
      error: false
    });
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.loadSongs();
  }

  handleChange(evt) {
    this.setState({
      songId: evt.target.value,
      error: false
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const playlistId = this.props.selected.id;
    const songId = this.state.songId;
    this.props.addSongToPlaylist(playlistId, songId);
  }

  render() {
    const songs = this.props.songs;
    const error = this.state.error;

    return (
      <AddSong
        {...this.props}
        songs={songs}
        error={error}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}/>
    );
  }
});
