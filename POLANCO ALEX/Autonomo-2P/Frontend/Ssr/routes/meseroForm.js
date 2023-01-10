var express = require('express');
var router = express.Router();

const axios = require('axios');

const httpAxios= axios.create({
    baseURL:'http://localhost:3000/'
})


router.post('/mesero/operar', ( req,res,next )=>{

    console.log(req.body)
    if (req.body._id==="")
    {
        httpAxios.post(`mesero/create`,{
            nombre: req.body.nombre,
            cedula: req.body.cedula,
            sueldobasico: req.body.sueldobasico,
            nivel: req.body.nivel,
        
        }).then(respuesta=>{
            res.redirect('/')
            console.log("hecho")
        })
    }
    else

    {
        console.log(req.body)
    
        httpAxios.put(`mesero/update/?meseroId=${req.body._id}`,{
            nombre: req.body.nombre,
            cedula: req.body.cedula,
            sueldobasico: req.body.sueldobasico,
            nivel: req.body.nivel,
        
        }).then(respuesta=>{
            res.redirect('/')
        })

    }

})

module.exports = router;