import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { logOut } from '../Actions/user'

class Navbar extends React.Component {

  logout = () =>{
    localStorage.removeItem("jwtToken");
    this.props.logOut()
    localStorage.removeItem("reduxPersist:user");

  }

  render(){
    if(!localStorage.getItem("jwtToken")){
    return(
      <div className="ui blue header menu">

	        <NavLink activeClassName="active" className="item" to="/">Home</NavLink>
	        <NavLink activeClassName="active" className="item right" to="/signUp">Sign Up</NavLink>
	        <NavLink activeClassName="active" className="item right" to="/login">Log In</NavLink>
	        <NavLink activeClassName="active" className="item left" to="/me">My Profile</NavLink>
          <NavLink onClick={this.logout} activeClassName="active" className="item right" to="/">Logout</NavLink>

     	 </div>
    )
  }else{
    return(
      <div className="ui blue header menu">

	        <NavLink activeClassName="active" className="item" to="/">Home</NavLink>
          <NavLink activeClassName="active" className="item left" to="/me">My Profile</NavLink>
          <NavLink onClick={this.logout} activeClassName="active" className="item right" to="/login">Logout</NavLink>


     	 </div>

    )
  }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logOut: (user) => {
      dispatch(logOut(user))
    }
  }
}

export default connect(null, mapDispatchToProps)(Navbar)
