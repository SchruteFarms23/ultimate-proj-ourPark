import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Navbar from './Navbar';
import { connect } from 'react-redux'
import {logIn} from '../Actions/user'



class LoginForm extends React.Component {

state = {
    password: "",
    email: ""
  }


  handleSubmit = (event) => {
    event.preventDefault()
    const loginParams = {   email:this.state.email, password: this.state.password}

    if(this.state.email.length > 0 && this.state.password.length > 0 ){
      this.props.logIn(loginParams, this.props)
    }
  }


  handleEmailChange = (event) =>{
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })

  }

  render() {
      return (

        <div>
        {this.props.location.pathname === "/login" ? <Navbar /> : null}
          <MuiThemeProvider>
            <div>
            <ul>
              <TextField
                hintText="Enter your Email"
                floatingLabelText="Email"
                onChange={this.handleEmailChange} value={this.state.email} />
                <br />
              <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange={this.handlePasswordChange} value={this.state.password} />
                <br />
              <RaisedButton label="Sign In" primary={true} style={style} onClick={this.handleSubmit}/>
            </ul>
          </div>
         </MuiThemeProvider>
      </div>


      )
    }

  }
const style = {
  margin: 15,
}

function mapDispatchToProps(dispatch) {
  return {
    logIn: (user,props) => {
      dispatch(logIn(user,props))
    }
  }
}

export default connect(null, mapDispatchToProps)(LoginForm)
