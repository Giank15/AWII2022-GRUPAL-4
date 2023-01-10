import './style.css'
import axios from 'axios'

import {IRPlato, Plato} from "./interfaces/IPlato"

const httpAxios=axios.create({
  baseURL:"http://localhost:3000/"
})


const app=document.querySelector<HTMLDivElement>("#app")!


app.innerHTML+=`
<body>
<nav class="nav">
  <ul class="lista">
    <li class="item"><a class="enlace" href="./index.html">Platos</a></li>
    <li class="item"><a class="enlace" href="./mesero.html">Meseros</a></li>
    <li class="item"><a class="enlace" href="./pedido.html">Pedido</a></li>
  </ul>
</nav>



<div class="container">



<label for="id">Identificador</label> <input type="text" id="idPlato">
<label for="nombreplato">Nombre Plato</label> <input type="text" id="nombreplato">
<label for="calidad">Calidad</label> <input type="text" id="calidad">
<label for="peso">Peso</label> <input type="text" id="peso">


<button id="limpiarPlato">Limpiar</button>
<button id="crearPlato">Grabar</button>
<button id="consultarPlato">consultar</button>



</div>

<div id="cuerpo"></div>


<footer class="footer">
creado por Alex Polanco 
</footer>

</body>
`

const limpiarPlato=document.querySelector<HTMLInputElement>("#limpiarPlato")!
const crearPlato=document.querySelector<HTMLInputElement>("#crearPlato")!
const consultarPlato=document.querySelector<HTMLInputElement>("#consultarPlato")!


const idPlato=document.querySelector<HTMLInputElement>("#idPlato")!
const nombreplato=document.querySelector<HTMLInputElement>("#nombreplato")!
const calidad=document.querySelector<HTMLInputElement>("#calidad")!
const peso=document.querySelector<HTMLInputElement>("#peso")!
const cuerpo = document.querySelector<HTMLDivElement>('#cuerpo')!

limpiarPlato.addEventListener("click",()=>{
  idPlato.value=""
  nombreplato.value=""
  calidad.value=""
  peso.value=""
})


consultarPlato.addEventListener("click", async()=>{
const resPlatos:IRPlato=await (await httpAxios.get<IRPlato>("plato")).data


const tabla=document.createElement("table")
tabla.id="tablaPlatos"
tabla.border="1"

const {platos}=resPlatos
console.log(platos)

for(const plato of platos){
  const row =tabla.insertRow()
  const celda=row.insertCell()
  celda.innerHTML=`Descripcion: <button class="boton" value="${plato._id}">${plato.nombreplato}</button>`
}

cuerpo.innerHTML=``
    cuerpo.appendChild(tabla)

    document.querySelectorAll(".boton").forEach((ele:Element)=>{
      ele.addEventListener("click", async()=>{
        const idx=(ele as HTMLButtonElement).value
        const plato:Plato=await (await httpAxios.get<Plato>(`plato/${idx}`)).data
       //yo estaba haciendo  idIdioma.value!=idioma._id eso es incorrecto
        idPlato.value=plato._id!
        nombreplato.value=plato.nombreplato
        calidad.value=plato.calidad
        peso.value=plato.peso
      })
    })
  })

crearPlato.addEventListener("click",async()=>{
const data:Plato={
  nombreplato:nombreplato.value,
  calidad:calidad.value,
  peso:peso.value
}

if(idPlato.value.trim().length>0)
{

const resp:Plato=await (await httpAxios.put<Plato>(`plato/update/?platoId=${idPlato.value}`,data)).data
console.log(`El plato ${resp.nombreplato} fue modificado con éxito`);
alert("El plato fue modificado con exito")
return;
}
try{
  const resp: Plato =  await (await httpAxios.post<Plato>(`plato/create`, data)).data
  console.log(`El plato ${resp.nombreplato} fue grabado con éxito`);
  alert("El plato fue grabado con exito")


}catch(error){
  if ( axios.isAxiosError(error)  )
    {
      console.log(error );
}

}
})


