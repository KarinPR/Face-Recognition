import React from 'react';

const Navigation = ({onRouterChange, isSignedIn}) => {
	if (isSignedIn) {
		return (
			<nav style = {{display: 'flex' , justifyContent:'flex-end'}}>
				<p className = 'f3 link dim washed-green pa3 pointer' onClick = {() => onRouterChange('signin')}> Sign Out</p>
			</nav>
		)
	} else {
		return (
			<nav style = {{display: 'flex' , justifyContent:'flex-end'}}>
				<p className = 'f3 link dim washed-green pa3 pointer' onClick = {() => onRouterChange('signin')}> Sign In</p>
				<p className = 'f3 link dim washed-green pa3 pointer' onClick = {() => onRouterChange('register')}> Register</p>
			</nav>
		)
	}
}

export default Navigation;