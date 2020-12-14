import React, {Component} from 'react'
import './App.css';
import Timer from './Components/Timer'

class App extends React.Component {
  state = {
    person : {
    fullName : "Slim Masmoudi",
    bio : "best bio ever",
    imgSrc : "profilePhoto.jpg",
    profession : "Video Game developper"
    },
    show : false,
  }
  
  clickMe = () => {
    this.setState({
      show : !this.state.show 
    })
  }


  render (){
    return (
      <>
        <button onClick={this.clickMe}>{(this.state.show) ? "Hide" : "Show"}</button> 
        {(this.state.show) && (
        <>
          <h1>{this.state.person.fullName} </h1>
          <p>{this.state.person.bio}</p>
          <img src={this.state.person.imgSrc}/>
          <p>{this.state.person.profession}</p>
          <Timer/>
        </>
        )
        }
      </>
    )
  };
}

export default App;
