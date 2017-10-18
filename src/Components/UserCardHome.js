import React from 'react'
import { connect } from 'react-redux'

class UserCardHome extends React.Component{
  render(){
    return(
      <div className="ui card">
    <div className="image">
      <img src={this.props.user.image_url}/>
    </div>
    <div className="content">
      <a className="header">{this.props.user.name}</a>
      <div className="meta">
        <span className="date">Joined in 2013</span>
      </div>
      <div className="description">
        Kristy is an art director living in New York.
      </div>
    </div>
    <div className="extra content">
      <a>
        <i className="user icon"></i>
        22 Friends
      </a>
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

export default connect(mapStateToProps)(UserCardHome);
