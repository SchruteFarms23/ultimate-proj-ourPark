import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { addPark,checkOut } from '../Actions/user'
import { addUser, removeUser } from '../Actions/map'
import '../index.css'


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
      park_id: parkId,
      props: this.props
    }
    this.props.addUser(this.props.user)

    this.props.addPark(params)

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

    }
  }

  goBackIn =() => {
    const parkId = this.props.currentPark.id
    this.props.history.push('/parks/' + parkId)
  }


  render(){
    const logo = require('../img/blacktop.png')

    if(this.props.visible && this.props.currentPark.users){
      const users = this.props.currentPark.users.map(user => <li key={user.id}>{user.name}</li>)
      if(this.props.loggedIn && this.props.user.park_id === null ){

      return(
        <div  className="ui active modal">
  <i className="close icon"></i>
  <div className="header">
    <p id="title">{this.props.currentPark.name}</p>
  </div>
  <div className="image content">
    <div className="ui small image">
      <img src={logo}/>
    </div>
    <div className="description">
      <div className="ui header"><p id="title">People Currently Checked In to The Park</p></div>
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

      return(
        <div className="ui active modal">
  <i className="close icon"></i>
  <div className="header">
    <p id="title">{this.props.currentPark.name}</p>
  </div>
  <div className="image content">
    <div className="ui small image">
      <img src={logo}/>
    </div>
    <div className="description">
      <div className="ui header"><p id="title">People Currently Checked In to The Park</p></div>
      {users}
    </div>
  </div>
  <div className="actions">
    <div>
    <div className="ui red deny button" onClick={this.doClose}>X</div>
    <div className="ui black deny button" onClick={this.doCheckOut}>Check Me Out</div>
    <div className="ui blue deny button" onClick={this.goBackIn}>Go back inside</div>
    </div>
  </div>
</div>
      )
    }else if((this.props.loggedIn && this.props.user.park_id !== null) && (this.props.currentPark.id !== this.props.user.park_id)){
    return(
      <div className="ui active modal">
<i className="close icon"></i>
<div className="header">
  <p id="title">{this.props.currentPark.name}</p>
</div>
<div className="image content">
  <div className="ui small image">
    <img src={logo}/>
  </div>
  <div className="description">
    <div className="ui header"><p id="title">People Currently Checked In to The Park</p></div>
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
  } else if(!this.props.loggedIn){

    return(
      <div className="ui active modal">
<i className="close icon"></i>
<div className="header">
  <p id="title">{this.props.currentPark.name}</p>
</div>
<div className="image content">
  <div className="ui small image">
    <img src={logo}/>
  </div>
  <div className="description">
    <div className="ui header"><p id="title">People Currently Checked In to The Park</p></div>
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
