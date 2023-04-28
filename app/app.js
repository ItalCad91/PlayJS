// Author:Riccardo Reali
// Date: 15-02-2023


//THIRD PARTY MODULES
import express, { urlencoded } from "express"; // is importing the Express module from the NPM package named "express".
import logger from "morgan";
import session from "express-session";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

//ES MODULES FIX FOR __DIRNAME
import path, {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

//INSTANTIATE EXPRESS
const app = express();

//SETTING UP MIDDLEWARES:
app.set('views', path.join(__dirname, '/Views'));
app.set('view engine', "ejs"); // SETTING UP THE APPLICATION TO USE EJS FILES
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'../public'))); // This makes the contents of the "public" directory in your project's directory accessible to the client-side.
app.use(session({
    secret: Secret,
    saveUninitialized: false, 
    resave: false
}));




//IMPORT ROUTES
import router from "./Routes/index.routes.server.js";

//USE ROUTES
app.use('/', router);

export default app;
