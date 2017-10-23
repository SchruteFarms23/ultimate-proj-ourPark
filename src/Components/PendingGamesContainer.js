import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPendingGames, createGame } from '../Actions/park' // change to pendingGames
import PendingGameSetup from './PendingGameSetup'

class PendingGamesContainer extends React.Component{

  componentDidMount(){
    console.log(this.props)
    const params= {park_id:this.props.park_id}
    this.props.fetchPendingGames(params)
  }

  createGame=()=>{
    console.log("hitting")
    console.log(this.props)
    const params= {park_id:this.props.park_id}
    this.props.createGame(params)

  }

  render(){
    console.log("rendering")
    if(this.props.pendingGames.length > 0){
      const mappedPendingGames = this.props.pendingGames.map(game => <PendingGameSetup key={game.id} game={game}/>)
    return(
      <div>
      <h2> Pending Games </h2>
      {mappedPendingGames}
      <h2> {this.props.pendingGames[this.props.pendingGames.length - 1].id}</h2>
      <button className="ui button" onClick={this.createGame}>
        Create a new Game
      </button>
      </div>
    )
  }else{
    return(
    <div>
    <h2> Pending Games </h2>
    <button className="ui button" onClick={this.createGame}>
      Create a new Game
    </button>
    </div>
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
    pendingGames: state.park.pendingGames
  }
}

function mapDispatchToProps(dispatch) {

  return {
    fetchPendingGames: (park) => {
      dispatch(fetchPendingGames(park))
    },
    createGame: (park) => {
      dispatch(createGame(park))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PendingGamesContainer);
