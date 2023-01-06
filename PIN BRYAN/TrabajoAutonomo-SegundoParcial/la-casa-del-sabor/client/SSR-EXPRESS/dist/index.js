"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const express_handlebars_1 = require("express-handlebars");
const handlebars_1 = __importDefault(require("handlebars"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
//CONFIG APP
app.set('port', process.env.PORT || 4000);
app.set('views', path_1.default.join(__dirname, 'views'));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.engine('.hbs', (0, express_handlebars_1.engine)({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path_1.default.join(app.get('views'), 'layouts'),
    partialsDir: path_1.default.join(app.get('views'), 'partials'),
}));
app.set('view engine', '.hbs');
//HANDLEBARS
handlebars_1.default.registerHelper('ife', (lvalue, rvalue, options) => {
    if (lvalue === rvalue) {
        return options.fn(this);
    }
    return options.inverse(this);
});
//MIDDLEWARE
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(function (req, res, next) {
    if (req.originalUrl && req.originalUrl.split("/").pop() === 'favicon.ico') {
        return res.sendStatus(204);
    }
    next();
});
//ROUTES
app.use(routes_1.default);
//ARRANQUE DEL SERVER
app.listen(app.get('port'), () => {
    console.clear();
    console.log('Servidor corriendo en el puerto: ', app.get('port'));
});
