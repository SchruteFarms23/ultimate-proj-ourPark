import React from 'react'
import { connect } from 'react-redux'
// import { Modal} from 'semantic-ui-react'
import { withRouter, Link } from 'react-router-dom'
import { addPark,checkOut } from '../Actions/user'
import { addUser, removeUser } from '../Actions/map'


class MarkerModal extends React.Component {

  componentDidMount(){
    this.setState({
      visible: this.props.visible
    })
  }

  doClose = () =>{
    this.props.close()
  }
  doCheckIn = () =>{
    const parkId = this.props.currentPark.id
    if(this.props.user && this.props.user.park_id === null){
    const params = {
      user_id: this.props.user_id,
      park_id: parkId
    }
    this.props.addUser(this.props.user)

    this.props.addPark(params)

    this.props.history.push('/parks/' + parkId)
  } else if(Object.keys(this.props.user).length !== 0 && this.props.user.park_id !== null){
    alert ("You are already checked in to a park.")
  } else if(Object.keys(this.props.user).length === 0){
    this.props.history.push('/login')
    }
  }

  doCheckOut = () => {
    const parkId = this.props.currentPark.id
    if(this.props.user && this.props.user.park_id !== null){
      const params = {
        user_id: this.props.user_id,
        park_id: parkId
      }
      this.props.removeUser(this.props.user_id)
      this.props.checkOut(params)
      this.props.close()
    }
  }

  render(){
    console.log(this.props)
    if(this.props.visible){
      debugger
      const users = this.props.currentPark.users.map(user => <li key={user.id}>{user.name}</li>)
      if(this.props.loggedIn && this.props.user.park_id === null ){
        debugger
      return(
        <div className="ui active modal">
  <i className="close icon"></i>
  <div className="header">
    {this.props.currentPark.name}
  </div>
  <div className="image content">
    <div className="ui medium image">
      <img src="/images/avatar/large/chris.jpg"/>
    </div>
    <div className="description">
      <div className="ui header">People Currently Checked In to The Park</div>
      {users}
    </div>
  </div>
  <div className="actions">
    <div>
      <div className="ui red deny button" onClick={this.doClose}>X</div>
      <div className="ui positive right labeled icon button" onClick={this.doCheckIn}>Check Me In<i className="checkmark icon"></i></div>
    </div>
  </div>
</div>
      )
    } else if((this.props.loggedIn && this.props.user.park_id !== null) && (this.props.currentPark.id === this.props.user.park_id) ){
      debugger
      return(
        <div className="ui active modal">
  <i className="close icon"></i>
  <div className="header">
    {this.props.currentPark.name}
  </div>
  <div className="image content">
    <div className="ui medium image">
      <img src="/images/avatar/large/chris.jpg"/>
    </div>
    <div className="description">
      <div className="ui header">People Currently Checked In to The Park</div>
      {users}
    </div>
  </div>
  <div className="actions">
    <div>
    <div className="ui red deny button" onClick={this.doClose}>X</div>
    <div className="ui black deny button" onClick={this.doCheckOut}>Check Me Out</div>
    </div>
  </div>
</div>
      )
    }else if((this.props.loggedIn && this.props.user.park_id !== null) && (this.props.currentPark.id !== this.props.user.park_id)){
    debugger
    return(
      <div className="ui active modal">
<i className="close icon"></i>
<div className="header">
  {this.props.currentPark.name}
</div>
<div className="image content">
  <div className="ui medium image">
    <img src="/images/avatar/large/chris.jpg"/>
  </div>
  <div className="description">
    <div className="ui header">People Currently Checked In to The Park</div>
    {users}
  </div>
</div>
<div className="actions">
  <div>
  <div className="ui red deny button" onClick={this.doClose}>X</div>
  </div>
</div>
</div>
    )
  }
    }else {
      return(
        <div className="ui modal">
        </div>
      )
    }
  }


}

function mapStateToProps(state){
  return {
    user: state.user.user,
    user_id: state.user.user_id,
    loggedIn: state.user.loggedIn,
    currentPark: state.maps.currentPark
  }
}

function mapDispatchToProps(dispatch){
  return{
    addPark: (park) => {
      dispatch(addPark(park))
  },
  checkOut: (user) => {
    dispatch(checkOut(user))
  },
  addUser: (user) => {
    dispatch(addUser(user))
  },
  removeUser: (user) => {
    dispatch(removeUser(user))
  }
 }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MarkerModal));

// {!this.props.user.park_id?  <div className="ui black deny button" onClick={this.doCheckOut}>Check Me Out</div><div className="ui positive right labeled icon button" onClick={this.doCheckIn}>Check Me In<i className="checkmark icon"></i></div>}

// {this.props.teamTwo.users.length >= 1?  <button className="ui button">{this.props.teamTwo.users[0].name}</button> : <button className="ui button" onClick={() => this.addUserToTeam(this.props.teamTwo.id)}> Fill Spot</button>}
// <a href="https://www.gravatar.com" target="_blank">gravatar</a>
