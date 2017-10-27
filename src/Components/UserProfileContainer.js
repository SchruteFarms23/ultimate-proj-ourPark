import React from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar';


class UserProfileContainer extends React.Component{
  render(){
    console.log(this.props)
    return(
      <div>
      <Navbar />
        <div className="ui card">
      <div className="image">
        <img src="/images/avatar2/large/kristy.png"/>
      </div>
      <div className="content">
        <a className="header">{this.props.user.name}</a>
        <div className="meta">
          <span className="date">Joined in 2013</span>
        </div>
      </div>
      <div className="extra content">
      </div>
    </div>
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
