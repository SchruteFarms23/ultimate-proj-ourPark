import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { logOut } from '../Actions/user'

class Navbar extends React.Component {

  logout = () =>{
    localStorage.removeItem("jwtToken");
    this.props.logOut()
  }

  render(){
    const hasToken = !!localStorage.getItem("jwtToken")
    if(hasToken === false){
    return(
      <div className="ui blue header menu">

	        <NavLink activeClassName="active" className="item" to="/">Home</NavLink>
	        <NavLink activeClassName="active" className="item right" to="/signUp">Sign Up</NavLink>

     	 </div>
    )
  }else{
    return(
      <div className="ui blue header menu">

	        <NavLink activeClassName="active" className="item" to="/">Home</NavLink>
          <NavLink activeClassName="active" className="item left" to={`/players/${this.props.user_id}`}>My Profile</NavLink>
          <NavLink onClick={this.logout} activeClassName="active" className="item right" to="/">Logout</NavLink>


     	 </div>

    )
  }
  }
}

function mapStateToProps(state){
  return {
    user: state.user.user,
    user_id: state.user.user_id,
    currentPark: state.maps.currentPark
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logOut: (user) => {
      dispatch(logOut(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
