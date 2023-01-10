import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { IMesero } from './interfaces/IMesero';
import axios from 'axios'
//Importar estilo
import './styles/servicios.css'

function Mesero(){
    const navigate = useNavigate();

    const handleAtras = ()=>{
      navigate("/");
    }
    const httpAxios = axios.create({
        baseURL:`http://localhost:8080`
    })

    useEffect(()=>
        {
            const nombreMesero = document.querySelector<HTMLInputElement>('#nombres')!
            const prueba = document.querySelector<HTMLButtonElement>('#prueba')!
            const consulta = document.querySelector<HTMLButtonElement>('#consulta')!
            const guardar = document.querySelector<HTMLButtonElement>('#guardar')!
            const cuerpo = document.querySelector<HTMLDivElement>('#body')!
            var idCopia;

            const asignarValores = ()=>{
              const body: IMesero = {
                nombreMesero: nombreMesero.value
              }
              return body;
            };

            prueba.addEventListener('click', async() =>{
              const resMesero = await (await httpAxios.get('/meseros')).data;
              console.log(resMesero);
            });

            consulta.addEventListener('click', async ()=>{
              const resMesero = await (await httpAxios.get('/meseros')).data;
          
              const tabla = document.createElement("table")
              tabla.id="tabla"
          
              for(const mesero of resMesero){
                const row = tabla.insertRow()
                const celda =  row.insertCell()
                celda.innerHTML=`${mesero._id}`
                const celda2= row.insertCell()
                celda2.innerHTML=`${mesero.nombreMesero}`
                const celda3= row.insertCell()
                celda3.innerHTML=`<button class="modificar" value="${mesero._id}">Modificar</button>`
                const celda4= row.insertCell()
                celda4.innerHTML=`<button class="eliminar" value="${mesero._id}">Eliminar</button>`
              }
              cuerpo.innerHTML=``
              cuerpo.appendChild(tabla)

              document.querySelectorAll<HTMLButtonElement>('.modificar').forEach((ele:Element) => {
                ele.addEventListener('click', async() =>{
                  const idx= (ele as HTMLButtonElement).value;
                  const mesero = await (await httpAxios.get<IMesero>(`/meseros/${idx}`)).data;
                  nombreMesero.value = mesero.nombreMesero;
                  idCopia = idx;
                });
              })

              document.querySelectorAll<HTMLButtonElement>('.eliminar').forEach((ele:Element) => {
                ele.addEventListener('click', async() =>{
                  const idx= (ele as HTMLButtonElement).value;
                  await httpAxios.delete<IMesero>(`/meseros/${idx}`);
                  alert(`Dato eliminando...`);
                  window.location.reload();
                });
              })
            });

            guardar.addEventListener('click', async ()=>{
            
              const body = asignarValores();
              const idx = idCopia;
              if (idx!=null){      
                const {data} = await httpAxios.put<IMesero>(`/meseros/${idx}`, body);
                console.log(`El dato ${data.nombreMesero} se modifico con éxito...`);
                alert(`Modificando datos...`);
                window.location.reload();
              }
              else{
                const {data} = await httpAxios.post<IMesero>(`/meseros`, body)
                console.log(`El dato ${data.nombreMesero} se registro con éxito...`);
                alert(`Guardando datos...`);
                window.location.reload();
              }
            })
        }
    )
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
                <i className="list material-icons bar-active">list</i>
              </div>
              <nav className="nadvar" id="nadvar">
                <ul id='opMenu'>
                  <li>
                  <Link to={'/'}>Volver a inicio</Link>
                  </li>
                </ul>
              </nav>
            </header>
            <main className="main container">
              <section className="seccion-formulario">
                <div className="contenedor-formulario">
                  <form method="post">
                    <h2>-SERVICIO MESERO-</h2><br/>
                    <label htmlFor="nombres">Nombre del Mesero</label><br/>
                    <input type="text" name="nombres" id="nombres" /><br/><br/>
                  </form>
                  <button id="prueba" >Prueba</button>
                  <button id="consulta" >Consultar</button>
                  <button className="guardar" id='guardar'>Guardar</button>
                  <button className="regresar" onClick={handleAtras}>Atras</button>
                </div>
              </section>
              <p></p>
              <div id="body"></div>
            </main>
        </div>
    )
}
export default Mesero