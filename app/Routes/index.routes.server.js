// Author:Riccardo Reali
// Date: 15-02-2023


import {displayHomePage, displayGamesPage, displayAboutPage, displayGame1Page, displayGame2Page, displayGame3Page} from '../Controllers/index.controllers.server.js'
import { Router } from "express";


const router = Router(); // I am initializing the router function.

// app.use('/')
router.get('/', displayHomePage);
router.get('/games', displayGamesPage);
router.get('/about', displayAboutPage);
router.get('/listofgames-guess', displayGame1Page);
router.get('/listofgames-pig', displayGame2Page);
router.get('/listofgames-snake', displayGame3Page);



export default router;
