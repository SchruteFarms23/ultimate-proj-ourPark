import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import TeamSetup from './TeamSetup'
import { startGame } from '../Actions/park'


class PendingGameSetup extends React.Component{

  startGame = () =>{
    console.log("hitting",this.props.game.id)
    const params = {game_id: this.props.game.id}
    this.props.startGame(params,this.props)
    // this.props.history.push(`/games/${this.props.game.id}`)
  }
  render(){
    console.log("rendering pending games",this.props)
    return(
      <div className="ui raised segment">
      <h2>Game {this.props.game.id}: Pending</h2>
      <TeamSetup teamOne={this.props.game.teams[0]} history={this.props.history} gameId={this.props.game.id}/>
      <TeamSetup teamTwo={this.props.game.teams[1]} history={this.props.history} gameId={this.props.game.id}/>
      {this.props.game.users.length === 6? <button className="ui primary button" onClick={this.startGame}>Start Game</button> : null}
      </div>
    )
  }
}



function mapDispatchToProps(dispatch) {

  return {
    startGame: (params,props) => {
      dispatch(startGame(params,props))
    }
  }
}

export default connect(null,mapDispatchToProps)(PendingGameSetup);
