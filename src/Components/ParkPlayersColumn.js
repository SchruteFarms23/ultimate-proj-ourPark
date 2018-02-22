import React from 'react'
import { connect } from 'react-redux'
import PlayerItem from './PlayerItem'

class ParkPlayersColumn extends React.Component{

  render(){
    const pStyle = {
      textAlign:'center',
      fontSize: '25px'
    };

    if(this.props.currentPark.users){
      const mappedPlayers = this.props.currentPark.users.map(player => <PlayerItem key={player.id} player={player} />)
    return(
      <div>
      <p id="title" style={pStyle}> Players Checked In </p>
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
