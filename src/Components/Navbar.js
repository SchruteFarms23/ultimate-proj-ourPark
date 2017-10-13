import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends React.Component {
  render(){
    return(
      <div className="ui blue header menu">

	        <NavLink activeClassName="active" className="item" to="/home">Home</NavLink>
	        <NavLink activeClassName="active" className="item right" to="/signUp">Sign Up</NavLink>
	        <NavLink activeClassName="active" className="item right" to="/login">Log In</NavLink>

     	 </div>
    )
  }
}
