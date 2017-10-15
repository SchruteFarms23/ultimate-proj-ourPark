import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { signUp } from '../Actions/user'
import { connect } from 'react-redux'



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
		const signupParams = {
		    email: this.state.email,
		    name:this.state.name,
		    password: this.state.password,
		    weight:this.state.weight,
		    height:this.state.height,
		    image_url:this.state.image_url
		  }
		if(this.state.password === this.state.passwordConfirm){
			this.props.signIn(signupParams,this.props)
    	// .then((res) => this.props.history.push('/'))
		}else{
			alert("Passwords do not match")
		}

	}



	handleEmailChange = (event) => {
		this.setState({
			email:event.target.value
		})
	}

  handleNameChange = (event) => {
    	this.setState({
        name: event.target.value
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
	handleImage = (event) => {
	    this.setState({
	    image_url: event.target.value
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
							hintText="Type in your Name"
							floatingLabelText="Type in your Name"
							onChange={this.handleNameChange} value={this.state.name} />
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

function mapDispatchToProps(dispatch) {
  return {
    signIn: (user,props) => {
      dispatch(signUp(user,props))
    }
  }
}

const style = {
margin: 15,

}

export default connect(null, mapDispatchToProps)(SignUp)
