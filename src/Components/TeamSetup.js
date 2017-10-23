import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCurrentTeam } from '../Actions/park'

class TeamSetup extends React.Component{

  componentDidMount(){
    console.log(this.props)
    if(this.props.teamOne){
    this.props.fetchCurrentTeam(this.props.teamOne.id)
  }else{
    this.props.fetchCurrentTeam(this.props.teamTwo.id)
  }
    //fetch current team put team in store
  }

  addUserToTeam = () => {
    console.log("hi")
  }

  render(){
    return(
    <div>
    <div> {this.props.teamOne? <p>Team One</p> : <p> Team Two </p>} </div>
    <button className="ui button" onClick={this.addUserToTeam}> Fill Spot</button>
    <button className="ui button" onClick={this.addUserToTeam}> Fill Spot</button>
    <button className="ui button" onClick={this.addUserToTeam}> Fill Spot</button>
    </div>
  )
}
}

function mapStateToProps(state){
  return {
    user: state.user.user,
    user_id: state.user.user_id,
    currentTeam: state.park.currentTeam
  }
}

function mapDispatchToProps(dispatch) {

  return {
    fetchCurrentTeam: (team) => {
      dispatch(fetchCurrentTeam(team))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TeamSetup);
