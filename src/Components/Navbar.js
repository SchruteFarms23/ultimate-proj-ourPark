import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends React.Component {
  render(){
    if(!localStorage.getItem("jwt")){
    return(
      <div className="ui blue header menu">

	        <NavLink activeClassName="active" className="item" to="/">Home</NavLink>
	        <NavLink activeClassName="active" className="item right" to="/signUp">Sign Up</NavLink>
	        <NavLink activeClassName="active" className="item right" to="/login">Log In</NavLink>

     	 </div>
    )
  }else{
    return(
      <div className="ui blue header menu">

	        <NavLink activeClassName="active" className="item" to="/">Home</NavLink>

     	 </div>

    )
  }
  }
}
