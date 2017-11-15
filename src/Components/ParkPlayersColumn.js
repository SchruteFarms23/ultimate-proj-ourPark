import React from 'react'
import { connect } from 'react-redux'
import PlayerItem from './PlayerItem'

class ParkPlayersColumn extends React.Component{




  render(){
    // this.props.players
    if(this.props.currentPark.users){
      console.log("hitting parkPlayersColumn render ", this.props.currentPark.users)
      // debugger
      const mappedPlayers = this.props.currentPark.users.map(player => <PlayerItem key={player.id} player={player} />)
    return(
      <div>
      <h2> Players Checked In </h2>
      <div className="ui items">
      {mappedPlayers}
      </div>
      </div>
    )
  }else{
    return(
      <p>...loading</p>
    )
  }
}
}

function mapStateToProps(state){
  return {
    user: state.user.user,
    user_id: state.user.user_id,
    currentPark: state.maps.currentPark
  }
}





export default connect(mapStateToProps)(ParkPlayersColumn);
