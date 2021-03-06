import React from 'react'
import {Link} from 'react-router-dom'

const PlayerItem = (props) => {
  return(

    <div className="item">
    <div className="ui tiny image">
    <img src={props.player.image_url}/>
    </div>
    <div className="middle aligned content">
    <Link to={`/players/${props.player.id}`}  className="header" >{props.player.name}</Link> <Link to={`/games/${props.player.game_id}`} className="header"> {props.player.game_id}</Link>
    </div>
    </div>
  )
}

export default PlayerItem;
