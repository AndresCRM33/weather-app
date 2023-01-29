import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards';
import About from "./components/About.jsx"
import Ciudad from './components/Ciudad.jsx';
// import videoBG from "./img-vid/fondo-lluvia.mp4";
import fondoImg from "./img-vid/paisaje2.jpg"

import { Routes , Route } from 'react-router-dom';

export default function App() {


  const [cities, setCities] = useState([]);

  // const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
  const apiKey = '12adc7541d84109f45a2c7ac18d5212a'

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
            pais: recurso.sys.country
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });

    }

    function onClose(id){
      setCities(oldCities => oldCities.filter(c => c.id !== id));
    }

    // function onFilter(ciudadId){
    //   let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    //   if(ciudad.length > 0){
    //     return ciudad[0];
    //   }
    //   else{
    //     return null;
    //   }

    // }

  return (
    <div className="App">
      {/* <video src={videoBG} autoPlay={true} loop={true} muted={true}></video> */}
      <img className='fondo' src={fondoImg} alt="imagen de fondo"/>
      <div className='nav'>
        <Nav onSearch={onSearch}/>
      </div>
    <Routes>
      <Route
      path='/'
      element={<Cards
        cities={cities}
        onClose={onClose}
      />}/>
      <Route
        path='/about'
        element={<About/>}
      />
      <Route
        exact
        path='/ciudad/:id'
        element={<Ciudad cities={cities}/>}
      />
    </Routes>
    </div>
  );
}
