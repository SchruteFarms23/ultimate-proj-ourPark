import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addUserToTeam } from '../Actions/park'

class TeamSetup extends React.Component{


  addUserToTeam = (teamId) => {
    const params = {team_id:teamId, user_id:this.props.user_id }

    this.props.addUserToTeam(params,this.props.gameId)
  }

  render(){
    if(this.props.teamOne){
    return(
    <div>
    <div> <p>Team One</p> </div>
    {this.props.teamOne.users.length >= 1?  <button className="ui button">{this.props.teamOne.users[0].name}</button> : <button className="ui button" onClick={() => this.addUserToTeam(this.props.teamOne.id)}> Fill Spot</button>}
    {this.props.teamOne.users.length >= 2?  <button className="ui button">{this.props.teamOne.users[1].name}</button> : <button className="ui button" onClick={() => this.addUserToTeam(this.props.teamOne.id)}> Fill Spot</button>}
    {this.props.teamOne.users.length === 3?  <button className="ui button">{this.props.teamOne.users[2].name}</button> : <button className="ui button" onClick={() => this.addUserToTeam(this.props.teamOne.id)}> Fill Spot</button>}
    </div>
  )
}else{
  return(
  <div>
  <div> <p>Team Two</p> </div>
  {this.props.teamTwo.users.length >= 1?  <button className="ui button">{this.props.teamTwo.users[0].name}</button> : <button className="ui button" onClick={() => this.addUserToTeam(this.props.teamTwo.id)}> Fill Spot</button>}
  {this.props.teamTwo.users.length >= 2?  <button className="ui button">{this.props.teamTwo.users[1].name}</button> : <button className="ui button" onClick={() => this.addUserToTeam(this.props.teamTwo.id)}> Fill Spot</button>}
  {this.props.teamTwo.users.length === 3?  <button className="ui button">{this.props.teamTwo.users[2].name}</button> : <button className="ui button" onClick={() => this.addUserToTeam(this.props.teamTwo.id)}> Fill Spot</button>}
  </div>
  )

}
}
}

function mapStateToProps(state){
  return {
    user: state.user.user,
    user_id: state.user.user_id
  }
}

function mapDispatchToProps(dispatch) {

  return {
    addUserToTeam: (params,gameId) => {
      dispatch(addUserToTeam(params,gameId))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TeamSetup);
