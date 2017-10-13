import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../App.css';
import MapComponent from './MapComponent'
import LoginForm  from './LoginForm';
import Home from './Home'
import Navbar from './Navbar';
import { GoogleApiWrapper } from 'google-maps-react'
import 'semantic-ui-css/semantic.min.css'

export default class App extends Component {



  render() {

    return (
      <div className="App">
        <Navbar />
        <Route exact path="/" render={(props)=><Home {...props}/>}/>
      </div>
    );
  }
}

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyC9a3aSF0IZbzVYpu5689hQb9FzsiDNtuo'
// })(App)



// 'AIzaSyC9a3aSF0IZbzVYpu5689hQb9FzsiDNtuo'
