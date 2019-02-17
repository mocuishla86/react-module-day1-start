import React from "react";

const user = (props) => {
    return (
        <h2>
            Hola, {props.firstName} {props.lastName}!
        </h2> 
    )
}

export default user;