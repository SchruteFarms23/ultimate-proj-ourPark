import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchActiveGames } from '../Actions/park'


class ActiveGamesContainer extends React.Component{


    componentDidMount(){
      console.log(this.props)
      const params= {park_id:this.props.park_id}
      this.props.fetchActiveGames(params)
    }




  render(){
    console.log("rendering")
    console.log(this.props)
    if(this.props.activeGames.length > 0){
    return(
      <div>
      <h1>Active Games</h1>
      <h2>Game {this.props.activeGames[0].id} : {this.props.activeGames[0].score}</h2>
      </div>
    )
  }else{
    return(
      <h1>No active games yet!</h1>
    )
  }
  }

}

function mapStateToProps(state){
  console.log("mapStateToProps")

  return {
    user: state.user.user,
    user_id: state.user.user_id,
    currentPark: state.maps.currentPark,
    activeGames: state.park.activeGames
  }
}

function mapDispatchToProps(dispatch) {

  return {
    fetchActiveGames: (park) => {
      dispatch(fetchActiveGames(park))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ActiveGamesContainer);
