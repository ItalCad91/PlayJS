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

// MONGODB:

//IMPORT MONGOOSE
import mongoose from "mongoose";
mongoose.set('strictQuery', true);

//CONFIGURATION MODULE SESSION AND MONGODB
import { Secret, MongoURL } from '../config/config.js';

// Method to establish a connection to a MongoDB database using Mongoose Library
mongoose.connect(MongoURL);

//CHECK IF OUR APPLICATION IS CONNECTED TO MONGO OR NOT
const db = mongoose.connection;
db.on('open', () => console.log("Connected to MongoDB"));
db.on('error', () => console.log("MongoDB Connection ERROR"));

//AUTHENTICATION STEPS:

// Auth Step 1 - import modules
import passport from 'passport';
import passportLocal from 'passport-local';
import flash from 'connect-flash';

// Auth Step 2 - define our auth strategy
let localStrategy = passportLocal.Strategy;

// Auth Step 3 - import the user model
import User from './Models/user.js';

// Auth Step 4 -  Setup Flash
app.use(flash());

// Auth Step 5 - Initialize Passport and Session
app.use(passport.initialize());
app.use(passport.session());

// Auth Step 6 - Implementing the Auth Strategy
passport.use(User.createStrategy());

// Auth Step 7 - Setup serialization and deserialization
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//IMPORT ROUTES
import router from "./Routes/index.routes.server.js";
import productRouter from "./Routes/products.routes.server.js"
import authRouter from "./Routes/authentication.routes.server.js"

//USE ROUTES
app.use('/', router);
app.use('/', productRouter);
app.use('/', authRouter);

export default app;
