import React from "react";
import { useParams, Link } from "react-router-dom";
import style from "./Ciudad.module.css";

export default function Ciudad({cities}) {

    let params = useParams();

    if(!cities.length) return (<h1 className={style.sinCiudad}>No hay ciudades</h1>)

    let [city] = cities.filter(c => c.id === parseInt(params.id))

    return (
        <div className={style.ciudad}>
                <div className={style.container}>
                    <h2>{city.name}</h2>
                    <div className={style.info}>
                        <div><strong>Temperatura:</strong> {city.temp} ºC</div>
                        <div><strong>Clima:</strong> {city.weather}</div>
                        <div><strong>Viento:</strong> {city.wind} km/h</div>
                        <div><strong>Cantidad de nubes:</strong> {city.clouds}</div>
                        <div><strong>Latitud:</strong> {city.latitud}º</div>
                        <div><strong>Longitud:</strong> {city.longitud}º</div>
                        <div><strong>Pais:</strong> {city.pais}</div>
                    </div>
                    <div className={style.containerBtn}>
                        <Link className={style.btnVolver} to="/">Volver</Link>
                    </div>
            </div>
        </div>
    )
}