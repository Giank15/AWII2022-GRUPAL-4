import './style3.css'
import axios from "axios";
import {IRPedido, Pedido} from "./interfaces/IPedido";


const httpAxios=axios.create({
  baseURL:"http://localhost:3000/"
})

const app=document.querySelector<HTMLDivElement>('#app')!
 
/*
const etiqueta=document.createElement("label")
etiqueta.textContent="identificador"
const input=document.createElement("input")
input.id="id"
etiqueta.htmlFor="id"
app.appendChild(etiqueta)
app.appendChild(input)
*/
//<label for="fecha">Fecha </label> <input id="fecha"/>
//<label for="id">Id aprendizaje</label>  <input id="id" />
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
<label for="id">Id </label>  <input id="id" />
<label for="idMesero">Id Mesero</label>  <input id="idMesero" />
<label for="idPlato"> Id Plato</label> <input id="idPlato">
<label for="fecha">Fecha</label> <input id="fecha"/>
<label for="mesa">Mesa</label> <input id="mesa"/>
<label for="cantidad">Cantidad</label> <input id="cantidad"/>
<label for="precio">Precio</label> <input id="precio"/>

<button id="nuevo">Nuevo</button>
<button id="grabar">Grabar</button>
<button id="consultar">Consultar</button>
</div>



<footer class="footer">
creado por Alex Polanco 
</footer>

</body>
<div id="cuerpo"> </div>

`
const nuevo=document.querySelector<HTMLButtonElement>("#nuevo")!
const grabar=document.querySelector<HTMLButtonElement>("#grabar")!
const consultar = document.querySelector<HTMLButtonElement>('#consultar')!

const id=document.querySelector<HTMLInputElement>("#id")!
const idMesero=document.querySelector<HTMLInputElement>("#idMesero")!
const idPlato=document.querySelector<HTMLInputElement>("#idPlato")!
const fecha=document.querySelector<HTMLInputElement>("#fecha")!
const mesa=document.querySelector<HTMLInputElement>("#mesa")!
const cantidad=document.querySelector<HTMLInputElement>("#cantidad")!
const precio=document.querySelector<HTMLInputElement>("#precio")!
const cuerpo = document.querySelector<HTMLDivElement>('#cuerpo')!
nuevo.addEventListener("click", ()=>{
  id.value=""
  idMesero.value=""
  idPlato.value=""
  fecha.value=""
  mesa.value=""
  cantidad.value=""
  precio.value=""
})


consultar.addEventListener("click", async()=>{
  const respPedidos:IRPedido=await (await httpAxios.get<IRPedido>("pedido")).data
  const tabla = document.createElement("table")
  tabla.id="tabla"
  tabla.border="1"

  const {pedidos}=respPedidos;
  console.log(respPedidos)
  

  for (const pedido of pedidos)
    {
      console.log(pedido)
      const row = tabla.insertRow()
      const celda =  row.insertCell()
      celda.innerHTML=` <button class="boton" value="${pedido._id}">${pedido.fecha}</button>`
    }

cuerpo.innerHTML=``
    cuerpo.appendChild(tabla)

    document.querySelectorAll(".boton").forEach((ele:Element)=>{
      ele.addEventListener("click", async()=>{
        const idx=(ele as HTMLButtonElement).value;
        const pedido:Pedido=await (await httpAxios.get<Pedido>(`pedido/${idx}`)).data
        id.value=pedido._id!.toString()
        idMesero.value=pedido.id_mesero.toString()
        idPlato.value=pedido.id_plato.toString()
        fecha.value=pedido.fecha.toString()
        mesa.value=pedido.mesa.toString()
        cantidad.value=pedido.cantidad.toString()
        precio.value=pedido.precio.toString()
      })
    })
  })

    grabar.addEventListener('click',async ()=>{
      const data:Pedido= {
        id_mesero:idMesero.value.toString(),
        id_plato: idPlato.value.toString(),
        fecha: fecha.value.toString(),
        mesa:mesa.value.toString(),
        cantidad:cantidad.value.toString(),
        precio:precio.value.toString()
      }
    
      if (id.value.trim().length>0 )
      {
        //        
        const resp: Pedido = await (await httpAxios.put<Pedido>(`pedido/update/?pedidoId=${id.value}`, data)).data
        console.log(`El pedido ${resp._id}  fue modificado con éxito`);
        alert("El pedido fue modificado con exito")
        return;
      }
      try {
        const resp: Pedido =  await (await httpAxios.post<Pedido>(`pedido/create`, data)).data
        console.log(`El pedido ${resp._id} fue grabado con éxito`);
        alert("El pedido fue creado con exito")


        
      } catch (error) {
        if ( axios.isAxiosError(error)  )
        {
          console.log(error );
        }
      }
    })