import express from "express"; 
import router from './app/Routes/index.routes.server.js' 
import logger from "morgan";
import session from "express-session";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

// Instantiate Express Application
const app = express();

//ES MODULES FIX FOR __DIRNAME
import { fileURLToPath } from "url";
import path, {dirname} from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));


//Setting up views Middlewares
app.set('view engine', "ejs");
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.set('views', path.join(__dirname, '/app/Views'));

//More Middlewares
app.use(express.static(path.join(__dirname,'/public'))); //Here we are saying that everything under public folder are static files, which means they are on the client side.
app.use(session({
                 secret: 'Mysecret',
                 saveUninitialized: false,
                 resave: false
               }))



app.use('/', router); 
app.listen(3000);
