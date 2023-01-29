import React, {useState} from 'react';
import styles from "./SearchBar.module.css";

export default function SearchBar({onSearch}) {
  // acá va tu código
  const [city, setCity] = useState("");

  return( 

    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("");
    }}>
  
    <div className={styles.contenedor}>
    <input 
    className={styles.texto} 
    type="text" 
    placeholder="Ciudad..."
    value={city}
    onChange={e => setCity(e.target.value)}
    />
    <input className={styles.boton} type="submit" value="Agregar" />
  </div>

  </form>
)};