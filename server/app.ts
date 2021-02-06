import express from "express";
import * as bodyParser from "body-parser";
import { getAllRestaurants, getRestaurantInfo, postReservation } from "./userRoutes";
import {
  getTodayStats,
  getPredictedStats,
  login,
  postRestaurantSetup,
  postNewRecipe,
  postNewWalkInClient,
} from "./ownerRoutes";

const app = express();

app.use(
  bodyParser.json({
    limit: "50mb",
    verify(req: any, res, buf, encoding) {
      req.rawBody = buf;
    },
  })
);

app.get("/", (_, res) => res.send("Nestorant Server"));

// CLIENT ROUTES
app.get("/client/restaurants/", (req, res) => getAllRestaurants(req, res));
app.get("/client/restaurants/:restaurantID", (req, res) => getRestaurantInfo(req, res));
app.post("/client/reservation/", (req, res) => postReservation(req, res));

// RESTAURATEUR ROUTES
app.get("/owner/:restaurantID/today/", (req, res) => getTodayStats(req, res));
app.get("/owner/:restaurantID/predicted/", (req, res) => getPredictedStats(req, res));
app.post("/owner/login/", (req, res) => login(req, res));
app.post("/owner/:restaurantID/setup/", (req, res) => postRestaurantSetup(req, res));
app.post("/owner/:restaurantID/recipe/", (req, res) => postNewRecipe(req, res));
app.post("/owner/:restaurantID/walkin/", (req, res) => postNewWalkInClient(req, res));
export { app };
