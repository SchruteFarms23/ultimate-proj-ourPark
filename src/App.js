import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapComponent from './Components/MapComponent'
import { GoogleApiWrapper } from 'google-maps-react'

class App extends Component {

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

  render() {
    console.log(this.state.parks)

    return (
      <div className="App">
        <MapComponent google={this.props.google} parks={this.state.parks} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC9a3aSF0IZbzVYpu5689hQb9FzsiDNtuo'
})(App)



// 'AIzaSyC9a3aSF0IZbzVYpu5689hQb9FzsiDNtuo'
