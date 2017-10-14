import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../App.css';
import MapComponent from './MapComponent'
import LoginForm  from './LoginForm';
import Home from './Home';
import Navbar from './Navbar';
import 'semantic-ui-css/semantic.min.css';
import SignUp from './SignUp';

export default class App extends Component {



  render() {

    return (
      <div className="App">
        <Navbar />
        <Route exact path="/" render={(props)=><Home {...props}/>}/>
        <Route exact path="/signup" render={(props)=><SignUp {...props}/>}/>
        <Route exact path="/login" render={(props)=><LoginForm {...props}/>}/>
      </div>
    );
  }
}

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyC9a3aSF0IZbzVYpu5689hQb9FzsiDNtuo'
// })(App)



// 'AIzaSyC9a3aSF0IZbzVYpu5689hQb9FzsiDNtuo'
