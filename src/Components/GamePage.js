import React from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux'
import { fetchCurrentGame } from '../Actions/game'

 class GamePage extends React.Component{
   componentDidMount(){
     const gameId = this.props.location.pathname.split('/').pop()
     console.log("hi from gamepage mouting", gameId)
     this.props.fetchCurrentGame(gameId)
   }
  render(){
    console.log("hi from gamePage", this.props)

    return(
      <div>
      <Navbar />
      <p>{this.props.currentGame.id}</p>
      </div>
    )

  }
}

  function mapStateToProps(state){

    return {
      user: state.user.user,
      user_id: state.user.user_id,
      currentPark: state.maps.currentPark,
      currentGame: state.game.currentGame
    }
  }

  function mapDispatchToProps(dispatch) {

    return {
      fetchCurrentGame: (game) => {
        dispatch(fetchCurrentGame(game))
      }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(GamePage);
