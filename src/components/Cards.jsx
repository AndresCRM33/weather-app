import React from 'react';
import Card from './Card';
import styles from "./Cards.module.css"

export default function Cards({cities, onClose, key}) {
  // acá va tu código
  // tip, podés usar un map
  // if(!cities.length){
  //   return (<h4 className={styles.sinCiudades}>Sin ciudades</h4>)
  // }
  //

    return (<div className={styles.contenedorCards}>
      {cities.length ? cities.map(city => <Card 
            className={styles.cardd}
            max={city.max}
            min={city.min}
            name={city.name}
            img={city.img}
            onClose={() => onClose(city.id)}
            id={city.id}
            key={city.key}
          />
          ):
          (<h4 className={styles.sinCiudades}>Sin ciudades</h4>)
          }
    </div>);
  
    
};