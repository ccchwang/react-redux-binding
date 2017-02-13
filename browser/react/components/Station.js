import React from 'react';
import Songs from './Songs'


export default function(props) {
//console.log(props)
  return (
    <div>
      <h3>Station Name</h3>
      <div className="list-group">
        <Songs
          songs={props.songs}
          currentSong={props.currentSong}
          isPlaying={props.isPlaying}
          toggle={props.toggle}
        />
      // </div>
    </div>
  )
}
