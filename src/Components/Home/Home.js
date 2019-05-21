import React, { Component } from 'react';
// import './Signin.css'
import Logo from '../Logo/Logo';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';
import Rank from '../Rank/Rank';
import FaceRecognition from '../FaceRecognition/FaceRecognition';


class Home extends Component {
	// constructor(props) {
	// super(props)
	// 	this.state = {
	// 		activeUser: {}
	// 	}
	// }

	componentDidMount() {
		const { user } = this.props
		// console.log(id)
	    fetch(`https://salty-lake-66087.herokuapp.com/profile/${user.id}`)
			.then(response => response.json())
			.then( user => {
				console.log(user)
		    })
	}

	render() {
			const {user, onInputChange, onButtonSubmit, imageUrl, boxes} = this.props
			// const {activeUser} = this.state
		return(
			<div> 
              <Logo />
              <Rank user = {user} />
              <ImageLinkForm 
                onInputChange = {onInputChange} 
                onButtonSubmit = {onButtonSubmit}
              />
              {imageUrl === ''
                ? ''
                : <FaceRecognition imageUrl = {imageUrl} boxes = {boxes}/>
              } 
            </div> 
		);
	}
}

export default Home;