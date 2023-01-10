import './style2.css'
import axios from 'axios'
import {IRMesero, Mesero} from "./interfaces/IMesero"


const httpAxios=axios.create({
    baseURL:"http://localhost:3000/"
})

const app=document.querySelector<HTMLDivElement>("#app")!

app.innerHTML=`


<nav class="nav">
  <ul class="lista">
    <li class="item"><a class="enlace" href="./index.html">Platos</a></li>
    <li class="item"><a class="enlace" href="./mesero.html">Meseros</a></li>
    <li class="item"><a class="enlace" href="./pedido.html">Pedido</a></li>
  </ul>
</nav>
<div class="container">


<label for="idMesero">Identificador</label> <input type="text" id="idMesero">
<label for="nombreMesero">Nombre</label> <input type="text" id="nombreMesero">
<label for="cedulaMesero">Cedula</label> <input type="text" id="cedulaMesero">
<label for="sueldoMesero">Sueldo</label> <input type="text" id="sueldoMesero">
<label for="nivelMesero">Nivel</label> <input type="text" id="nivelMesero">

<button id="limpiarMesero">Limpiar</button>
<button id="crearMesero">Grabar</button>
<button id="consultarMesero">consultar</button>
</div>
<div id="cuerpo"> </div>

<footer class="footer">
creado por Alex Polanco 
</footer>
`
const limpiarMesero=document.querySelector<HTMLInputElement>("#limpiarMesero")!
const crearMesero=document.querySelector<HTMLInputElement>("#crearMesero")!
const consultarMesero=document.querySelector<HTMLInputElement>("#consultarMesero")!


const idMesero=document.querySelector<HTMLInputElement>("#idMesero")!
const nombreMesero=document.querySelector<HTMLInputElement>("#nombreMesero")!
const cedulaMesero=document.querySelector<HTMLInputElement>("#cedulaMesero")!
const sueldoMesero=document.querySelector<HTMLInputElement>("#sueldoMesero")!
const nivelMesero=document.querySelector<HTMLInputElement>("#nivelMesero")!
const cuerpo = document.querySelector<HTMLDivElement>('#cuerpo')!


limpiarMesero.addEventListener("click",()=>{
    idMesero.value=""
    nombreMesero.value=""
    cedulaMesero.value=""
    sueldoMesero.value=""
    nivelMesero.value=""
  })


  consultarMesero.addEventListener("click", async()=>{
    const resMesero:IRMesero=await (await httpAxios.get<IRMesero>("mesero")).data
    
    
    const tabla=document.createElement("table")
    tabla.id="tablaMeseros"
    tabla.border="1"
    
    const {meseros}=resMesero
    console.log(meseros)

    for(const mesero of meseros){
        const row =tabla.insertRow()
        const celda=row.insertCell()
        celda.innerHTML=`Nombre: <button class="boton" value="${mesero._id}">${mesero.nombre}</button>`
      }


      cuerpo.innerHTML=``
      cuerpo.appendChild(tabla)
  
      document.querySelectorAll(".boton").forEach((ele:Element)=>{
        ele.addEventListener("click", async()=>{
          const idx=(ele as HTMLButtonElement).value
          const mesero:Mesero=await (await httpAxios.get<Mesero>(`mesero/${idx}`)).data
         //yo estaba haciendo  idIdioma.value!=idioma._id eso es incorrecto
          idMesero.value=mesero._id!
          nombreMesero.value=mesero.nombre
          cedulaMesero.value=mesero.cedula
          sueldoMesero.value=mesero.sueldobasico
          nivelMesero.value=mesero.nivel
        
        })
      })
    })

crearMesero.addEventListener("click",async()=>{
const data:Mesero={
  nombre:nombreMesero.value,
  cedula:cedulaMesero.value,
  sueldobasico:sueldoMesero.value,
  nivel:nivelMesero.value
}
        
if(idMesero.value.trim().length>0)
{
        
const resp:Mesero=await (await httpAxios.put<Mesero>(`mesero/update/?meseroId=${idMesero.value}`,data)).data
console.log(`El mesero ${resp.nombre}  fue modificado con éxito`);
alert("El mesero fue modificado con exito")
return;
}
try{
  const resp: Mesero =  await (await httpAxios.post<Mesero>(`mesero/create`, data)).data
  console.log(`El mesero ${resp.nombre} fue grabado con éxito`);
  alert("El mesero fue grabado con exito")
        
}catch(error){
  if ( axios.isAxiosError(error)  )
    {
      console.log(error );
}
        
}
})
        
    

    