import React, { Component } from "react";
import Titulo from "./Titulo.js"
import User from "./components/User.js"

import "./App.css";
 
class App extends Component {

  state = {
    userA: {
            firstName: 'Marta',
            lastName: 'Garcia',
            avatarUrl:'http://www.kodlamaker.com/wp-content/uploads/2015/10/codingforkids.png'
    },
    userB: {
            firstName: 'Carlitos',
            lastName: 'Garcia',
            avatarUrl:'https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png'
    },
    clickCount: 0,
    backColor: 'yellow',
  }
  colorMapper = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

clickHandler = () => {
    this.setState({
      clickCount: this.state.clickCount+1
    }, ()=>{
        if(this.state.clickCount === 5){
            this.setState({
                userA: {
                        firstName: 'Jon',
                        lastName: 'Doe',
                        avatarUrl:'http://www.kodlamaker.com/wp-content/uploads/2015/10/codingforkids.png'
                },
                userB: {
                        firstName: 'Susanne',
                        lastName: 'Smith',
                        avatarUrl:'https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png'
                },
                backColor: 'yellow'
            })
        } else {
            this.setState({
                backColor: this.colorMapper()
            })
        }
    }) 
}

  render() {
    return (
      <div className="App">
        <Titulo frase="mifrase"/>
        <p>Count is: {this.state.clickCount}</p>
        <button onClick={this.clickHandler}>Click me</button>
        <User theColor={this.state.backColor} firstName={this.state.userA.firstName} lastName={this.state.userA.lastName} image={this.state.userA.avatarUrl}/>
        <User firstName="Sandra" lastName="Vioque" image={this.state.userB.avatarUrl}/>

        <p>Contenido...</p>
      </div>
    );
  }
}


export default App;
