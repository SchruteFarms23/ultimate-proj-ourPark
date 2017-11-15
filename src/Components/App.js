import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import '../App.css';
import MapComponent from './MapComponent'
import LoginForm  from './LoginForm';
import UserProfileContainer from './UserProfileContainer'
import PlayerPage from './PlayerPage';
import ParkPage from './ParkPage';
import GamePage from './GamePage'
import Home from './Home';
import Navbar from './Navbar';
import 'semantic-ui-css/semantic.min.css';
import SignUp from './SignUp';
import {setCurrentUser} from '../Actions/user'
import { connect } from 'react-redux'



class App extends Component {

  constructor(props){
    super(props)
    const jwt_token = localStorage.getItem('jwtToken')
    if(jwt_token){
      console.log("Hi from app.js")
      props.setCurrentUser()
    }
  }


  render() {

    return (

      <Switch>


        <Route exact path="/" render={(props)=><Home {...props}/>}/>
        <Route exact path="/signup" render={(props)=><SignUp {...props}/>}/>
        <Route exact path="/login" render={(props)=><LoginForm {...props}/>}/>
        <Route exact path="/me" render={(props)=><UserProfileContainer {...props}/>}/>
        <Route exact path="/players/:id" render={(props)=> <PlayerPage {...props} />}/>
        <Route exact path="/parks/:id" render={(props)=> <ParkPage {...props} />}/>
        <Route exact path="/games/:id" render={(props)=> <GamePage {...props} />}/>


      </Switch>

    );
  }
}

function mapDispatchToProps(dispatch){
  return{
    setCurrentUser: () => {
      dispatch(setCurrentUser())
    }
  }
}

export default withRouter(connect(null,mapDispatchToProps)(App));
