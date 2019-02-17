import React, { Component } from "react";
import "./Titulo.css";
 
class Titulo extends Component {
  render() {
    const user = {
      nombre: "Paco",
      apellido: "Vioque",
      sexo: "hombre",
      avatar:
        "https://i.pinimg.com/originals/c8/2e/28/c82e287250bb5a9f7874c75502aaa2d8.jpg"
    };

    const showImage = user => <img src={user.avatar} />;

    const formatUser = user => `${user.nombre} ${user.apellido}`;

    const getClass = user => {
      if (user.sexo === "hombre") {
        return "texto-verde";
      } else {
        return "texto-rosa";
      }
    };

    return (
      <div>
        <h1 class={getClass(user)}>Las caminatass de {formatUser(user)}</h1>
        {showImage(user)}
        <div>
        <h2>{this.props.frase}</h2>
        </div>
      </div>
    );
  }
}

export default Titulo;
