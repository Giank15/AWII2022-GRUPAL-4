import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
//Importar estilo
import './styles/principal.css'

function Principal(){
    return(
        <div className="principal">
            <header className="header">
              <div className="logo">
                <div className="imagen-logo">
                </div>
                <div className="contenedor-letras-logo">
                  <h1>Control de Propinas</h1>
                  <p>Trabajo autónomo 2P - Aplicaciones Web 2</p>
                </div>
                <i className="list material-icons bar-active" onClick="barActive()">list</i>
              </div>
              <nav class="nadvar" id="nadvar">
              </nav>
            </header>
            <main class="main container">
              <div class="parrafo-principal">
                <p>
                  El tema central de este trabajo autónomo consiste en la creación de un aplicativo Web
                  referente al control de propinas (temática designada al comienzo del semestre), 
                  que integre un Backend y Frontend completos y funcionales.
                </p>
              </div>
              <div class="perfil-refugio">
                <h2>-OPCIONES-</h2>
              </div>
              <ul id='opMenu'>
                <li>
                <Link to={'/cliente'}>-Cliente</Link>
                </li>
                <li>
                <Link to={'/mesero'}>-Mesero</Link>
                </li>
                <li>
                <Link to={'/propina'}>-Propina</Link>
                </li>
              </ul>
            </main>
        </div>
    )
}
export default Principal