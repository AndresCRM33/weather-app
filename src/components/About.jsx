import React from "react";
import "./About.css";
import {Link} from "react-router-dom";

export default function About(){
    return <div className="containerAbout">
        <div className="container2">
        <h2 className="tituloAbout">Sobre mí</h2>
        <span>Hola, soy Andres Rios, desarrollador web. esta es mi primer SPA, una aplicación del clima
            aquí puse en practica lo que he aprendido de React, como componentes, estados, hooks, react-router y 
            varias cosas. 
            Proximamente tendré más proyectos con React..
        </span>
        <Link to="/" className="botonVolver">Volver</Link>
        </div>
    </div>;
}