import React, { Component } from 'react';
import Particles from 'react-particles-js';

import Navigation from '../Components/Navigation/Navigation';
import Home from '../Components/Home/Home'
import Signin from '../Components/Signin/Signin';
import Register from '../Components/Register/Register';


import data from './particlesjs-config.json'
import './App.css';


const initialState = {
  particleData: {},
  input: '',
  imageUrl: '',
  boxes: [],
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
};
class App extends Component {
  constructor(props) {
  super(props)
      this.state = initialState
  }

  componentDidMount() {
    this.setState({ particleData: data})
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions;
    const pictureBoxes = clarifaiFace.map( (region) => {
      const clarifaiFaceBox = region.region_info.bounding_box;
      return {
        leftCol: `${clarifaiFaceBox.left_col * 100}%`,
        topRow: `${clarifaiFaceBox.top_row * 100}%`,
        rightCol: `${100 - (clarifaiFaceBox.right_col * 100)}%`,
        bottomRow: `${100 - (clarifaiFaceBox.bottom_row * 100)}%`
      }
    })
    return pictureBoxes;
  }

  displayFacebox = (box) => {
    this.setState({boxes : box})
    console.log(box.length)
  }

  onInputChange = (event) => {
      this.setState({input : event.target.value})
  }
  onButtonSubmit = () => {
    this.setState({imageUrl : this.state.input})
    fetch('https://salty-lake-66087.herokuapp.com/input', {
      method: 'post',
      headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*'},
      body: JSON.stringify({
        input: this.state.input
      })
    })
    .then(response => response.json())
    .then( response => {
      console.log(response.status.code)
      if (response.status.code === 10000) {
        console.log('hello')
        fetch('https://salty-lake-66087.herokuapp.com/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*'},
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
        .then(response => response.json())
        .then(count => {
          this.setState(Object.assign(this.state.user, { entries: count }))
          // console.log(this.state.user)
        })
        .catch(console.log) 
      this.displayFacebox(this.calculateFaceLocation(response))
      }
    })
    .catch( err => console.log(err));
  }

  onRouterChange = (route) => {
    if (route === 'signin') {
      this.setState( initialState )
    } else if (route === 'home') {
      this.setState({isSignedIn : true})
    }
    this.setState({route : route})
  }

  loadUser = (user) => {
    this.setState({ user: {
      id: user.id,
      name: user.name,
      email: user.email,
      entries: user.entries,
      joined: user.joined
    }})
  }

  render(){
    const { particleData, isSignedIn, imageUrl, route, boxes, user } = this.state
    return (
      <div className="App">
        <Particles className = 'particles'
          params = {particleData}
        />
        <Navigation onRouterChange = {this.onRouterChange} isSignedIn = {isSignedIn}/>
        {route === 'home'
          ?  <Home 
                user = {user} 
                onInputChange = {this.onInputChange} 
                onButtonSubmit = {this.onButtonSubmit} 
                imageUrl = {imageUrl} 
                boxes = {boxes} 
              /> 
          : (route === 'signin' 
              ? <Signin loadUser = {this.loadUser} onRouterChange = {this.onRouterChange} />
              : <Register loadUser = {this.loadUser} onRouterChange = {this.onRouterChange} />
            )
        }
      </div>
    );
  }
}

export default App;


