import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';



class LoginForm extends React.Component {

state = {
    password: "",
    email: ""
  }


  handleSubmit = (event) => {
    // console.log(this.state.username)
    // debugger;
    event.preventDefault()
    console.log("Clicking Button", this.state.email, this.state.password)
    // send some api call to the backend
    // clear fields
    const loginParams = {   email:this.state.email, password: this.state.password}

    this.props.onLogin(loginParams)
    this.setState({
      email: "",
      password: ""
    })

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

    // console.log("RENDERING")
    // ARE WE LOGGED IN
      return (
        <div>
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

export default LoginForm
