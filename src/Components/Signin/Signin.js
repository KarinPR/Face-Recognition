import React, { Component } from 'react';
// import './Signin.css'


class Signin extends Component {
	constructor(props) {
	super(props)
		this.state = {
			signInEmail: '',
			signInPassword: '',
		}
	}

	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}

	onSubmitSignIn = () => {
		fetch('https://salty-lake-66087.herokuapp.com/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*' },
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
	      .then(response => response.json())
	      .then(user => {
	      	if (user.id) {
	      		this.props.loadUser(user)
				this.props.onRouterChange('home')
	      	} 
	      })
	}
    render() {
    	const { onRouterChange } = this.props
		return (
			<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
				<main className="pa4 white-80">
					<div className="measure">
						<fieldset id="sign_up" className="pa3 ba b--transparent ph0 mh0">
						  <legend className="f1 fw6 ph0 mh0">Sign In</legend>
						  <div className="mt3">
						    <label className="pa3 db fw6 lh-copy f3" htmlFor="email-address">Email</label>
						    <input 
						    	className=" br2 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
						    	type="email" 
						    	name="email-address"  
						    	id="email-address" 
						    	onChange = {this.onEmailChange}
						    />
						  </div>
						  <div className="mv3">
						    <label className="pa3 db fw6 lh-copy f3" htmlFor="password">Password</label>
						    <input 
						    	className="br2 b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
						    	type="password" 
						    	name="password"  
						    	id="password" 
						    	onChange = {this.onPasswordChange}
						    />
						  </div>
						  <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
						</fieldset>
						<div className="">
						  <input className="br2 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib white" type="submit" value="Sign in" onClick = {this.onSubmitSignIn}/>
						</div>
						<div className="lh-copy mt3">
						  <p href="#0" className="f5 link dim white db pointer" onClick = {() => onRouterChange('register')}>Register</p>
						  <a href="#0" className="f5 link dim white db">Forgot your password?</a>
						</div>
					</div>
				</main>
			</article>
		);
    } 	
}

export default Signin;