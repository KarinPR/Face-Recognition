import React, { Component } from 'react';
// import './Signin.css'


class Register extends Component {
	constructor(props) {
	super(props)
		this.state = {
			registerName: '',
			registerEmail: '',
			registerPassword: '',
		}
	}

	onNameChange = (event) => {
		this.setState({registerName: event.target.value})
	}

	onEmailChange = (event) => {
		this.setState({registerEmail: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({registerPassword: event.target.value})
	}

	onSubmitRegister = () => {
		fetch('http://localhost:3000/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.registerName,
				email: this.state.registerEmail,
				password: this.state.registerPassword
			})
		}).then(response => response.json())
	      .then(user => {
	      	if (user.id) {
	      		this.props.loadUser(user)
				this.props.onRouterChange('home')
	      	}
	    })
	}
    render() {
    	// const { onRouterChange } = this.props
		return (
			<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
				<main className="pa4 white-80">
					<div className="measure">
						<fieldset id="sign_up" className="pa3 ba b--transparent ph0 mh0">
						  <legend className="f1 fw6 ph0 mh0 white">Register</legend>
						  <div className="mt3">
						    <label className="pa3 db fw6 lh-copy f3" htmlFor="name">Name</label>
						    <input 
						    	className = " br2 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
						    	type = "text" 
						    	name = "name"  
						    	id = "name"
						    	onChange = {this.onNameChange} 
						    />
						  </div>
						  <div className="mt3">
						    <label className="pa3 db fw6 lh-copy f3 white" htmlFor="email-address">Email</label>
						    <input 
						    	className=" br2 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
						    	type="email" 
						    	name="email-address"  
						    	id="email-address"
						    	onChange = {this.onEmailChange} 
						    />
						  </div>
						  <div className="mv3">
						    <label className="pa3 db fw6 lh-copy f3 white" htmlFor="password">Password</label>
						    <input 
						    	className="br2 b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
						    	type="password" 
						    	name="password"  
						    	id="password"
						    	onChange = {this.onPasswordChange} 
						    />
						  </div>
						</fieldset>
						<div className="">
						  <input className="br2 b ph3 pv2 input-reset ba b--black white bg-transparent grow pointer f4 dib" type="submit" value="Register" onClick = {this.onSubmitRegister}/>
						</div>
					</div>
				</main>
			</article>
		);
	}
}

export default Register;