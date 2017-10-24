import React from 'react'
import Navbar from './Navbar';
import { connect } from 'react-redux'
import ParkPlayersColumn from './ParkPlayersColumn'
import ActiveGamesContainer from './ActiveGamesContainer'
import PendingGamesContainer from './PendingGamesContainer'



  class ParkPage extends React.Component{
  
  render(){

    return(
      <div>
      <Navbar />
      <div className="ui internally celled grid">

        <div className="three wide column"><ParkPlayersColumn   />    </div>


        <div className="six wide column"> {this.props.currentPark.id? <ActiveGamesContainer park_id={this.props.currentPark.id} /> : null }</div>

        <div className="five wide column"> {this.props.currentPark.id? <PendingGamesContainer park_id={this.props.currentPark.id} history={this.props.history} /> : null }  </div>
      </div>
      </div>



    )
  }



}

function mapStateToProps(state){
  return {
    user: state.user.user,
    user_id: state.user.user_id,
    currentPark: state.maps.currentPark
  }
}

export default connect(mapStateToProps)(ParkPage);
