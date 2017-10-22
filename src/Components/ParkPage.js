import React from 'react'
import Navbar from './Navbar';
import { connect } from 'react-redux'
import ParkPlayersColumn from './ParkPlayersColumn'
import ActiveGamesContainer from './ActiveGamesContainer'



  class ParkPage extends React.Component{
  state={
    park: {}
  }

  componentDidMount(){

    console.log(this.props)
    console.log("hitting componentDidMount")
    const parkId = this.props.location.pathname.split('/').pop()
    const url = "http://localhost:3000/parks/"
    console.log(url + parkId)
    fetch(url+parkId)
    .then((res) => res.json())
		.then((park) => {
			console.log(park)
      this.setState({
        park: park.park
      })

		})
  }

  render(){

    return(
      <div>
      <Navbar />
      <div className="ui internally celled grid">

        <div className="three wide column"><ParkPlayersColumn   />    </div>


        <div className="six wide column"> {this.props.currentPark.id? <ActiveGamesContainer park_id={this.props.currentPark.id} /> : null }</div>

        <div className="five wide column">  </div>
      </div>
      </div>



    )
  }



}

function mapStateToProps(state){
  debugger

  // console.log("hitting mapStateToProps")

  return {
    user: state.user.user,
    user_id: state.user.user_id,
    currentPark: state.maps.currentPark
  }
}

export default connect(mapStateToProps)(ParkPage);
