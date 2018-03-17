import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import ActiveTeamSetup from './ActiveTeamSetup'

class ActiveGameSetup extends React.Component{
  render(){
    return(
      <div className="ui raised segment">
      <h2>Game {this.props.game.id}: Score {this.props.game.teams[0].points} - {this.props.game.teams[1].points}</h2>
      <ActiveTeamSetup teamOne={this.props.game.teams[0]} history={this.props.history} gameId={this.props.game.id}/>
      <ActiveTeamSetup teamTwo={this.props.game.teams[1]} history={this.props.history} gameId={this.props.game.id}/>
      </div>
    )
  }
}

export default ActiveGameSetup;
