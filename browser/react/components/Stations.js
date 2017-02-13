import React from 'react';
import { Link } from 'react-router'


export default function(props) {
 // const stations = Object.keys(props.stations);
console.log('stations props', props)
  return(

    <div>
      <h3>Stations</h3>
      <div className="list-group">

      {
        props.stations.map(station => {
          return (
            <div className="list-group-item" key={station.id}>
              <Link to={`/stations/${station.id}`}>{station.name}</Link>

            </div>
          );
        })
      }
      </div>
    </div>
  )
}
