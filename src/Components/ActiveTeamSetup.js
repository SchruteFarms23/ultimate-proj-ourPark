import React from 'react'

export default class ActiveTeamSetup extends React.Component{
  render(){
    if(this.props.teamOne){
      const teamOneMappedPlayers = this.props.teamOne.users.map(player => <button key={player.id} className="ui button">{player.name}</button> )
    return(
    <div>
    <div> <p>Team One: {this.props.teamOne.points}</p> </div>
      {teamOneMappedPlayers}
    </div>
  )
}else{
  const teamTwoMappedPlayers = this.props.teamTwo.users.map(player => <button key={player.id} className="ui button">{player.name}</button> )

  return(
  <div>
  <div> <p>Team Two: {this.props.teamTwo.points}</p> </div>
    {teamTwoMappedPlayers}
  </div>
  )

}
}
}
