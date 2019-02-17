import React, { Component } from "react";
import Titulo from "./Titulo.js"
import User from "./components/User.js"

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Titulo frase="mifrase"/>
        <User firstName="Maruja" lastName="Cortés"/>
        <User firstName="Sandra" lastName="Vioque"/>
        <p>Contenido...</p>
      </div>
    );
  }
}


export default App;
