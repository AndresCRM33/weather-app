import React from "react";
import style from "./footer.module.css"

export default function Footer(){
    return(<div className={style.container}>
        <footer className={style.footer}>
        <span><strong>Aplicación creada por: </strong> Andres Rios</span>
        </footer>
    </div>)
}