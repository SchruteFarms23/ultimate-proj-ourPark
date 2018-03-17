import React from 'react'
import Navbar from './Navbar';
import { connect } from 'react-redux'
import ParkPlayersColumn from './ParkPlayersColumn'
import ActiveGamesContainer from './ActiveGamesContainer'
import PendingGamesContainer from './PendingGamesContainer'
import {setCurrentUser} from '../Actions/user'
import { fetchCurrentPark } from '../Actions/park'




  class ParkPage extends React.Component{

    componentDidMount(){

      if(!this.props.user_id){
        this.props.setCurrentUser()
      }
    }

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
  console.log("mappingStateProps in Park")
  return {
    user: state.user.user,
    user_id: state.user.user_id,
    currentPark: state.maps.currentPark
  }
}

function mapDispatchToProps(dispatch){
  return{
    setCurrentUser: () => {
      dispatch(setCurrentUser())
    },
    fetchCurrentPark: (params) => {
      dispatch(fetchCurrentPark(params)) 
    }
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(ParkPage);
