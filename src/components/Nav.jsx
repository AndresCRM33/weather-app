import React from 'react';
import SearchBar from './SearchBar.jsx';
import styles from'./Nav.module.css';
import { Link } from "react-router-dom";

function Nav({onSearch}) {
  return (
    <div className={styles.contenedor}>
      <Link to="/">
        <div>
          <h1>Weather App</h1>
        </div>
      </Link>
      <div>
        <SearchBar
        onSearch={onSearch}
        />
      </div>
      <Link className={styles.about} to="/about">
        <span>About</span>
      </Link>
    </div>
  );
};

export default Nav;
