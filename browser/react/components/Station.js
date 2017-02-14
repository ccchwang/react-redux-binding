import React from 'react';
import Songs from './Songs'


export default function(props) {

  return (
    <div>
      <h3>Station Name</h3>
      <div className="list-group">
        <Songs
          songs={props.songs}
          currentSong={props.currentSong}
          isPlaying={props.isPlaying}
          toggleOne={props.toggle}
        />
      </div>
    </div>
  )
}
