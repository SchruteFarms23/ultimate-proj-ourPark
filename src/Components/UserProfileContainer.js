import React from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar';


class UserProfileContainer extends React.Component{
  render(){
    console.log(this.props)
    return(
      <div>
      <Navbar />
      <p>{this.props.user.name}</p>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.user.user
  }
}

export default connect(mapStateToProps)(UserProfileContainer);
