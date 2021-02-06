var express = require('express');
var bodyParser = require('body-parser');
var ownerRoutes = require('./ownerRoutes');
var userRoutes = require('./userRoutes');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("hello from the nestorant app"));
// CLIENT ROUTES
app.get("/client/restaurants/", (req, res) => userRoutes.getAllRestaurants(req, res));
app.get("/client/restaurants/:restaurantID", (req, res) => userRoutes.getRestaurantInfo(req, res));
app.post("/client/reservation/", (req, res) => userRoutes.postReservation(req, res));

// RESTAURATEUR ROUTES
app.get("/owner/:restaurantID/:year/:month/:day/", (req, res) => ownerRoutes.getDayStats(req, res));
app.get("/owner/:restaurantID/predicted/", (req, res) => ownerRoutes.getPredictedStats(req, res));
app.post("/owner/register/", (req, res) => ownerRoutes.register(req, res));
app.post("/owner/login/", (req, res) => ownerRoutes.login(req, res));
app.post("/owner/:restaurantID/setup/", (req, res) => ownerRoutes.postRestaurantSetup(req, res));
app.post("/owner/:restaurantID/recipe/", (req, res) => ownerRoutes.postNewRecipe(req, res));
app.post("/owner/:restaurantID/walkin/", (req, res) => ownerRoutes.postNewWalkInClient(req, res));


const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`),
);