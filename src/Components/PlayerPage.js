import React from 'react';
import Navbar from './Navbar';

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
        player: player
      })

		})
  }
  render(){
    return(
      <div>
      <Navbar />
      <div className="ui internally celled grid">
  <div className="row">
    <div className="three wide column">
      <img/>
    </div>
    <div className="ten wide column">
      <h1>{this.state.player.name}</h1>
      <p></p>
    </div>
    <div className="three wide column">
      <img/>
    </div>
  </div>
  <div className="row">
    <div className="three wide column">
      <img/>
    </div>
    <div className="ten wide column">
      <p></p>
    </div>
    <div className="three wide column">
      <img/>
    </div>
  </div>
</div>
</div>
    )
  }
}





// <h1>{this.state.player.name}</h1>
