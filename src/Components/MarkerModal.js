import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addPark,checkOut } from '../Actions/user'

class MarkerModal extends React.Component {

  componentDidMount(){
    console.log(this.props.visible)
    this.setState({
      visible: this.props.visible
    })
  }

  doCheckIn = () =>{
    const parkId = this.props.park.id
    if(this.props.user && this.props.user.park_id === null){
    const params = {
      user_id: this.props.user_id,
      park_id: parkId
    }
    this.props.addPark(params)
    this.props.history.push('/parks/' + parkId)
  } else if(Object.keys(this.props.user).length !== 0 && this.props.user.park_id !== null){
    alert ("You are already checked in to a park.")
  } else if(Object.keys(this.props.user).length === 0){
    console.log("hitting")
    this.props.history.push('/login')
  }
  }

  doCheckOut = () => {
    console.log(this.props.user_id)
    const parkId = this.props.park.id
    if(this.props.user && this.props.user.park_id !== null){
      const params = {
        user_id: this.props.user_id,
        park_id: parkId
      }
      this.props.checkOut(params)
      this.setState({
        visable: !this.state.visable
      })
    }
  }

  render(){
    console.log("Rendering Marker Modal",this.props)
    if(this.props.visible){
      console.log(this.props)
      console.log("visible")
      const users = this.props.park.users.map(user => <li key={user.id}>{user.name}</li>)
      return(
        <div className="ui active modal">
  <i className="close icon"></i>
  <div className="header">
    {this.props.park.name}
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
    <div className="ui black deny button" onClick={this.doCheckOut}>
      Check Me Out
    </div>
    <div className="ui positive right labeled icon button" onClick={this.doCheckIn}>
      Check Me In
      <i className="checkmark icon"></i>
    </div>
  </div>
</div>
      )
    }else {
      console.log(this.props)
      console.log("invisible")
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
    user_id: state.user.user_id
  }
}

function mapDispatchToProps(dispatch){
  return{
    addPark: (user) => {
      dispatch(addPark(user))
  },
  checkOut: (user) => {
    dispatch(checkOut(user))
  }
 }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MarkerModal));


// <a href="https://www.gravatar.com" target="_blank">gravatar</a>
