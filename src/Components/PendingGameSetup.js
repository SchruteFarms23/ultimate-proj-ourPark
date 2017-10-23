import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import TeamSetup from './TeamSetup'

class PendingGameSetup extends React.Component{
  render(){
    return(
      <div>
      <h2>Game:{this.props.game.id} Pending</h2>
      <TeamSetup teamOne={this.props.game.teams[0]} history={this.props.history} gameId={this.props.game.id}/>
      <TeamSetup teamTwo={this.props.game.teams[1]} history={this.props.history} gameId={this.props.game.id}/>
      {this.props.game.users.length === 6? <button className="ui primary button">Start Game</button> : null}
      </div>
    )
  }
}

export default PendingGameSetup;
