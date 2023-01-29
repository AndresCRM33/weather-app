import React from 'react';
import styles from "./Card.module.css";
import {Link} from "react-router-dom";

export default function Card({min, max, name, img, onClose, id}) {
  // acá va tu código
  return <div className={styles.contenedor}>

  <div className={styles.boton}>
    <button onClick={onClose}>X</button>
  </div>
  <Link to={`/ciudad/${id}`} className={styles.link}>
    <h4>{name}</h4>
  
  <div className={styles.contenido}>
    <div className={styles.maxmin}>
      <h5>min</h5>
      <p>{min}</p>
    </div>
    <div className={styles.maxmin}>
      <h5>max</h5>
      <p>{max}</p>
    </div>
    <img className={styles.imagen} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="imagen"/>
  </div>
  </Link>
  </div>
};