// Author:Riccardo Reali
// Date: 28-04-2023

export function displayHomePage(req, res, next) {
  res.render("index", { title: "PlayJS", page: "home" }); // RENDERS IN THE EJS TEMPLATE CALLED INDEX
}

export function displayGamesPage(req, res, next) {
  res.render("index", { title: "PlayJS Games", page: "games" }); // RENDERS IN THE EJS TEMPLATE CALLED INDEX
}

export function displayAboutPage(req, res, next) {
  res.render("index", { title: "PlayJS About", page: "about" }); // RENDERS IN THE EJS TEMPLATE CALLED INDEX
}

export function displayGame1Page(req, res, next) {
  res.render("index", {
    title: "PlayJS Guess Number",
    page: "listofgames/guess",
  }); // RENDERS IN THE EJS TEMPLATE CALLED INDEX
}

export function displayGame3Page(req, res, next) {
  res.render("index", { title: "PlayJS Snake", page: "listofgames/snake" }); // RENDERS IN THE EJS TEMPLATE CALLED INDEX
}
