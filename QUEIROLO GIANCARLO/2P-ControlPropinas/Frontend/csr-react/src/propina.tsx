import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { IPropina } from './interfaces/IPropina';
import axios from 'axios'
//Importar estilo
import './styles/servicios.css'

function Propina(){
    const navigate = useNavigate();

    const handleAtras = ()=>{
      navigate("/");
    }
    const httpAxios = axios.create({
        baseURL:`http://localhost:8080`
    })

    useEffect(()=>
        {
            const idCliente = document.querySelector<HTMLInputElement>('#idCliente')!
            const idMesero = document.querySelector<HTMLInputElement>('#idMesero')!
            const fechaPropina = document.querySelector<HTMLInputElement>('#fecha')!
            const horaPropina = document.querySelector<HTMLInputElement>('#hora')!
            const valorPropina = document.querySelector<HTMLInputElement>('#valor')!
            const prueba = document.querySelector<HTMLButtonElement>('#prueba')!
            const consulta = document.querySelector<HTMLButtonElement>('#consulta')!
            const guardar = document.querySelector<HTMLButtonElement>('#guardar')!
            const cuerpo = document.querySelector<HTMLDivElement>('#body')!
            var idCopia;

            const asignarValores = ()=>{
              const body: IPropina = {
                idCliente: idCliente.value,
                idMesero: idMesero.value,
                fechaPropina: fechaPropina.value,
                horaPropina: horaPropina.value,
                valorPropina: valorPropina.value
              }
              return body;
            };

            prueba.addEventListener('click', async() =>{
              const resPropina = await (await httpAxios.get('/Propina')).data;
              console.log(resPropina);
            });

            consulta.addEventListener('click', async ()=>{
              const resPropina = await (await httpAxios.get('/Propina')).data;
          
              const tabla = document.createElement("table")
              tabla.id="tabla"
          
              for(const propina of resPropina){
                const row = tabla.insertRow()
                const celda =  row.insertCell()
                celda.innerHTML=`${propina._id}`
                const celda2= row.insertCell()
                celda2.innerHTML=`${propina.idCliente}`
                const celda3= row.insertCell()
                celda3.innerHTML=`${propina.idMesero}`
                const celda4= row.insertCell()
                celda4.innerHTML=`${propina.fechaPropina}`
                const celda5= row.insertCell()
                celda5.innerHTML=`${propina.horaPropina}`
                const celda6= row.insertCell()
                celda6.innerHTML=`${propina.valorPropina}`
                const celda7= row.insertCell()
                celda7.innerHTML=`<button class="modificar" value="${propina._id}">Modificar</button>`
                const celda8= row.insertCell()
                celda8.innerHTML=`<button class="eliminar" value="${propina._id}">Eliminar</button>`
              }
              cuerpo.innerHTML=``
              cuerpo.appendChild(tabla)

              document.querySelectorAll<HTMLButtonElement>('.modificar').forEach((ele:Element) => {
                ele.addEventListener('click', async() =>{
                  const idx= (ele as HTMLButtonElement).value;
                  const propina = await (await httpAxios.get<IPropina>(`/Propina/${idx}`)).data;
                  idCliente.value = propina.idCliente;
                  idMesero.value = propina.idMesero;
                  fechaPropina.value = propina.fechaPropina;
                  horaPropina.value = propina.horaPropina;
                  valorPropina.value = propina.valorPropina;
                  idCopia = idx;
                });
              })

              document.querySelectorAll<HTMLButtonElement>('.eliminar').forEach((ele:Element) => {
                ele.addEventListener('click', async() =>{
                  const idx= (ele as HTMLButtonElement).value;
                  await httpAxios.delete<IPropina>(`/Propina/${idx}`);
                  alert(`Dato eliminando...`);
                  window.location.reload();
                });
              })
            });

            guardar.addEventListener('click', async ()=>{
            
              const body = asignarValores();
              const idx = idCopia;
              if (idx!=null){      
                const {data} = await httpAxios.patch<IPropina>(`/Propina/${idx}`, body);
                console.log(`El dato ${data.fechaPropina} se modifico con éxito...`);
                alert(`Modificando datos...`);
                window.location.reload();
              }
              else{
                const {data} = await httpAxios.post<IPropina>(`/Propina`, body)
                console.log(`El dato ${data.fechaPropina} se registro con éxito...`);
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
                    <h2>-SERVICIO PROPINA-</h2><br/>
                    <label htmlFor="idCliente">ID de Cliente</label><br/>
                    <input type="text" name="idCliente" id="idCliente" /><br/><br/>
                    <label htmlFor="idMesero">ID de Mesero</label><br/>
                    <input type="text" name="idMesero" id="idMesero" /><br/><br/>
                    <label htmlFor="fecha">Fecha de Propina</label><br/>
                    <input type="text" name="fecha" id="fecha" /><br/><br/>
                    <label htmlFor="hora">Hora de Propina</label><br/>
                    <input type="text" name="hora" id="hora" /><br/><br/>
                    <label htmlFor="valor">Valor de Propina</label><br/>
                    <input type="text" name="valor" id="valor" /><br/><br/>
                  </form>
                  <button id="prueba" >Prueba</button>
                  <button id="consulta" >Consultar</button>
                  <button className="guardar" id="guardar">Guardar</button>
                  <button className="regresar" onClick={handleAtras}>Atras</button>
                </div>
              </section>
              <p></p>
              <div id="body"></div>
            </main>
        </div>
    )
}
export default Propina