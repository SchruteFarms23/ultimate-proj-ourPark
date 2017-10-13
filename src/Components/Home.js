import React, { Component } from 'react';
import MapComponent from './MapComponent'
import LoginForm  from './LoginForm';
import Navbar from './Navbar';
import { GoogleApiWrapper } from 'google-maps-react'




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
    return(
      <div className="ui grid">
      
        <div className="two wide column"><LoginForm /></div>


        <div className="two wide column">  <MapComponent google={this.props.google} parks={this.state.parks} /></div>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC9a3aSF0IZbzVYpu5689hQb9FzsiDNtuo'
})(Home)
