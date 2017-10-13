import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// import LoginForm from './LoginForm'


class SignUp extends React.Component {

	state = {
    email:"",
		name: "",
		password: "",
    passwordConfirm: "",
    weight:"",
    height:"",
    image_url:""

	}

	handleSubmit = (event) => {
		event.preventDefault()
		// console.log("hi")
		// console.log(this.state.username)
		// console.log(this.state.password)
		const signupParams = {
    		username: this.state.username,
    		password: this.state.password }
    	const body= JSON.stringify(signupParams)
    	return fetch("http://localhost:3000/users",{
    		method: 'post',
   			 body: body,
    		headers: {
      		"Accept":"application/json",
      		"Content-Type":"application/json"
    	}
  		})
    	.then((res) => {
      	return res.json()})
      	.then((user) => {
			localStorage.setItem("jwtToken", user.jwt)
			})
    	.then((res) => this.props.history.push('/myProfile'))

	}


  //   event.preventDefault()
  //   var apiBaseUrl = "http://localhost:3000/users";
  //   var self = this;
  //   if (this.state.username.length > 0 && this.state.password.lenght > 0) {
    	// var payload = {
    	// 	"username": this.state.username,
    	// 	"password": this.state.password }
		// const body = JSON.stringify(payload)
  // 			return fetch(apiBaseUrl, payload)
		// 	    .then((res) => {
		// 	      console.log(res);
		// 	      if (res.data.code == 200) {
		// 	      	var loginscreen = [];
		// 	      	loginscreen.push(<LoginForm parentContext={this}/>)
		// 	      	var loginmessage = "Not Registered yet.Go to registration";
		// 	      	self.props.parentContext.setState({loginscreen:loginscreen,
  //      				loginmessage:loginmessage,
  //     				buttonLabel:"Register",
  //      				isLogin:true
		// 	      })
  //   		}
		// })
		//     	.catch(function (error) {
		//     		console.log(error)
	 //    	})
  //   	}



  	handleUsernameChange = (event) => {
    	this.setState({
        username: event.target.value
    })

  }

	handlePasswordChange = (event) => {
	    this.setState({
	    password: event.target.value
    })
  }
	handleConfirmPasswordChange = (event) => {
	    this.setState({
	    passwordConfirm: event.target.value
    })
  }
	handleWeightChange = (event) => {
	    this.setState({
	    weight: event.target.value
    })
  }
	handleHeightChange = (event) => {
	    this.setState({
	    height: event.target.value
    })
  }

	render() {
		return(
			<div>
				<MuiThemeProvider>
					<div>
					<ul>
						<TextField
							hintText="Type in your Email"
							floatingLabelText="Type in your Email"
							onChange={this.handleEmailChange} value={this.state.email} />
							<br />
						<TextField
							type="password"
							hintText="Create your Password"
							onChange={this.handlePasswordChange} value={this.state.password} />
							<br />
						<TextField
							type="password"
							hintText="Confirm your Password"
							onChange={this.handleConfirmPasswordChange} value={this.state.passwordConfirm} />
							<br />
						<TextField
							hintText="Enter your Weight"
              floatingLabelText="Enter Your Weight"
							onChange={this.handleWeightChange} value={this.state.weight} />
							<br />
						<TextField
							hintText="Enter your Height"
              floatingLabelText="Enter Your Height"
							onChange={this.handleHeightChange} value={this.state.height} />
							<br />
						<TextField
							hintText="Put in an Image url of yourself"
              floatingLabelText="Put in an Image url of yourselft"
							onChange={this.handleImage} value={this.state.image_url} />
							<br />

						<RaisedButton label="Submit" primary={true} style={style} onClick={this.handleSubmit} />
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

export default SignUp
