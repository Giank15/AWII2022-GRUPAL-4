import express, { NextFunction } from 'express';
import path from 'path';
import { engine } from 'express-handlebars';
import handlebars from 'handlebars';
import IndexRoutes from './routes'

const app = express();

//CONFIG APP
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('.hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
}) as any );

app.set('view engine', '.hbs');

//HANDLEBARS
handlebars.registerHelper('ife',  (lvalue, rvalue, options) => {
    if (lvalue === rvalue) {
        return options.fn(this) 
    }
    return options.inverse(this)
})

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use( function(req, res, next) {

    if (req.originalUrl && req.originalUrl.split("/").pop() === 'favicon.ico') {
      return res.sendStatus(204);
    }
  
   next();
    
  });

//ROUTES
app.use(IndexRoutes);

//ARRANQUE DEL SERVER
app.listen(app.get('port'), () => {
    console.clear();
    console.log('Servidor corriendo en el puerto: ', app.get('port'));  
})