import React from 'react'
import { connect } from 'react-redux'
import { addUser, removeUser } from '../Actions/map'
import { withRouter } from 'react-router-dom'
import { checkOut } from '../Actions/user'

class UserParkSegment extends React.Component{

  doCheckOut = () => {
    const parkId = this.props.user_park

    if(this.props.user && this.props.user.park_id !== null){
      const params = {
        user_id: this.props.user_id,
        park_id: parkId
      }
      this.props.checkOut(params)
    }
  }

  goBackIn =() => {
    const parkId = this.props.user_park
    this.props.history.push('/parks/' + parkId)
  }

  render(){
    console.log("hi from userParkSeg")
    if(this.props.user.park){
      var place = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDE9h88IYK4mxI-eqGF1zJ2KfzH_EhXTNE&q=${this.props.user.park.lat},${this.props.user.park.long}`
      console.log(place)
    }
    return(
      <div className="ui stackable padded segment">
        {this.props.user.park ? <div><p id="title">Current Park</p> <p id="userParkName">{this.props.user.park.name}</p><iframe width="100%" height="200" src={place}></iframe>
          <div className="ui black deny button" onClick={this.doCheckOut}>Check Me Out</div> <div className="ui blue deny button" onClick={this.goBackIn}>Go back inside</div> </div>  : <p> You are not currently checked into a park </p>}
      </div>
    )
  }

}

function mapStateToProps(state){
  return {
    user: state.user.user,
    user_id: state.user.user_id,
    loggedIn: state.user.loggedIn,
    user_park: state.user.user.park_id
  }
}

function mapDispatchToProps(dispatch){
  return{
  checkOut: (user) => {
    dispatch(checkOut(user))
  }
 }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserParkSegment));

// AIzaSyDE9h88IYK4mxI-eqGF1zJ2KfzH_EhXTNE

// <iframe width="100%" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=40.7127837,-74.0059413&amp;key=YOUR_API_KEY"></iframe>
