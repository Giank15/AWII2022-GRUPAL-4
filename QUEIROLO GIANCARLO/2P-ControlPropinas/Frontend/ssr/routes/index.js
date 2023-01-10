var express = require('express');
var router = express.Router();
const axios = require('axios');

const httpAxios =  axios.create({
  baseURL:'http://localhost:8080',
})


/* GET home page. */
router.get('/', function(req, res, next) {
  httpAxios.get(`/meseros`).then(respuesta=>{
    console.log(respuesta.data.meseros);
    res.render('index', { meseros: respuesta.data.meseros });
  })
});
router.get('/meseros/nuevo',(req,res,next)=>{
  res.render('meseroForm', {})
})

router.get('/meseros/modificar/:id',(req,res,next)=>{
  httpAxios.get(`/meseros/${req.params.id}`).then(respuesta=>{
    res.render('meseroForm', {meseros: respuesta.data})
  })
})
router.get('/meseros/eliminar/:id', (req,res,next)=>{
  httpAxios.delete(`/meseros/${req.params.id}`).then(respuesta=>{
    res.redirect('/');
  })
})

module.exports = router;