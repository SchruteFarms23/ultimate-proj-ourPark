import React, { Component } from 'react';
import MapComponent from './MapComponent'
import LoginForm  from './LoginForm';
import Navbar from './Navbar';
import { GoogleApiWrapper } from 'google-maps-react';
import UserCardHome from './UserCardHome';





 class Home extends Component{
  state={
    parks:[]
  }

  componentDidMount(){
		fetch('http://localhost:3000/parks')
		.then(res => res.json())
		.then(res => this.setState({
			parks: res
		}))
  }

  render(){
    if(!localStorage.getItem("jwtToken")){
    return(
      <div>
      <Navbar />
      <div className="ui stackable grid">

        <div className="two wide column"><LoginForm {...this.props} /></div>


        <div className="two wide column">  <MapComponent google={this.props.google} parks={this.state.parks} history ={this.props.history} /></div>
      </div>
      </div>
    )
  }else {
    return(
      <div>
      <Navbar />
      <div className="ui padded stackable grid">

        <div className="two wide column"><UserCardHome {...this.props} /></div>


        <div className="two wide column">  <MapComponent google={this.props.google} parks={this.state.parks} history ={this.props.history} /></div>
      </div>
      </div>
    )

  }
 }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC9a3aSF0IZbzVYpu5689hQb9FzsiDNtuo'
})(Home)
