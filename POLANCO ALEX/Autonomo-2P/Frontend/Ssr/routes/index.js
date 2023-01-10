var express = require('express');
var router = express.Router();
const axios = require('axios');

const httpAxios =  axios.create({
  baseURL:'http://localhost:3000/',
})


/* GET home page. */
router.get('/', function(req, res, next) {
  httpAxios.get(`mesero`).then(respuesta=>{
    console.log(respuesta.data.meseros);
    res.render('index', { mesero: respuesta.data.meseros});
  })
});



router.get('/mesero/nuevo',(req,res,next)=>{
  res.render('meseroForm', {})
})

router.get('/mesero/modificar/:id',(req,res,next)=>{
  httpAxios.get(`mesero/${req.params.id}`).then(respuesta=>{
    res.render('meseroForm', {mesero: respuesta.data })
  })
})

router.get('/mesero/eliminar/:id', (req,res,next)=>{
  httpAxios.delete(`meseros/${req.params.id}`).then(respuesta=>{
    res.redirect('/');
  })
})


module.exports = router;