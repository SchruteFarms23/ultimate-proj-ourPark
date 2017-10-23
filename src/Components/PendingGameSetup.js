import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import TeamSetup from './TeamSetup'

class PendingGameSetup extends React.Component{
  render(){
    console.log(this.props.game.teams)
    return(
      <div>
      <h2>Game:{this.props.game.id} Pending</h2>
      <TeamSetup teamOne={this.props.game.teams[0]}/>
      <TeamSetup teamTwo={this.props.game.teams[1]}/>
      </div>
    )
  }
}

export default PendingGameSetup;
