import React from 'react';

export default class PlayerPage extends React.Component{
  state = {
    player:{}
  }
  componentDidMount(){
    const playerId = this.props.location.pathname.split('/').pop()
    const url = "http://localhost:3000/users/"
    console.log(url + playerId)
    fetch(url + playerId)
    .then((res) => res.json())
		.then((player) => {
			console.log(player)
      this.setState({
        player: player.player
      })

		})
  }
  render(){
    return(
      <p>{this.state.player.email}</p>
    )
  }
}
