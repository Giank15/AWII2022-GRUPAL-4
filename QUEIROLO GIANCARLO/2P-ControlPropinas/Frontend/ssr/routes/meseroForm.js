var express = require('express');
var router = express.Router();

const axios = require('axios');

const httpAxios= axios.create({
    baseURL:'http://localhost:8080'
})


router.post('/meseros/operar', ( req,res,next )=>{

    console.log(req.body)
    if (req.body._id==="")
    {
        httpAxios.post(`/meseros`,{
            nombreMesero: req.body.nombreMesero
        }).then(respuesta=>{
            res.redirect('/')
        })
    }
    else
    {
        httpAxios.put(`/meseros/${req.body._id}`,{
            nombreMesero: req.body.nombreMesero
        }).then(respuesta=>{
            res.redirect('/')
        })
    }

})

module.exports = router;