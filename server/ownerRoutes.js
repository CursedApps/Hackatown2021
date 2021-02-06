const connection = require("./database");

module.exports = {
  getDayStats: function (req, res) {
    const startDate = `${req.params.month}/${req.params.day}/${req.params.year}`;
    const endDate = `${startDate} 23:59:59`;

    connection.query(
      "SELECT * FROM `reservations` WHERE reservationTime between ? and ?",
      [startDate, endDate],
      function (error, results, _) {
        if (error) throw error;
        res.json(results);
      }
    );
  },

  getPredictedStats: function (req, res) {
    res.send("TODO -> LINK TO ADEM");
  },

  register: function (req, res) {
    const restaurantID = req.body["restaurantID"];
    const username = req.body["username"];
    const password = req.body["password"];

    if (!restaurantID || !username || !password) res.sendStatus(400).send("Incomplete registration");
    const query = "INSERT INTO `users` (restaurantID, username, password) VALUES (?, ?, ?)";
    const params = [restaurantID, username, password];
    connection.query(query, params, function (error, _, _) {
      if (error) throw error;
      res.sendStatus(200).send("Successfully registered");
    });
  },

  login: function (req, res) {
    const username = req.body["username"];
    const password = req.body["password"];

    if (!username || !password) res.sendStatus(400).send("Incomplete login");
    const query = "SELECT * FROM `users` WHERE username=? and password=? LIMIT 1";
    const params = [username, password];
    connection.query(query, params, function (error, results, _) {
      if (error) throw error;
      if (results.length === 0) res.sendStatus(401);
      res.sendStatus(200).send("Successfully registered");
    });
  },

  postRestaurantSetup: function (req, res) {
    const name = req.body["restaurantID"];
    const capacity = req.body["nbClients"];
    const openingTime = req.body["arrival"];
    const closingTime = req.body["recipesIDs"];

    if (!name || !capacity || !openingTime || !closingTime) res.sendStatus(400).send("Incomplete setup");
    const query = "INSERT INTO `restaurants` (name, capacity, openingTime, closingTime) VALUES (?, ?, ?, ?)";
    const params = [name, capacity, openingTime, closingTime];
    connection.query(query, params, function (error, _, _) {
      if (error) throw error;
      res.sendStatus(200).send("Successfully added restaurant");
    });
  },

  postNewRecipe: function (req, res) {
    const restaurantID = req.body["restaurantID"];
    const name = req.body["name"];
    const price = req.body["price"];
    const ingredients = req.body["ingredients"];

    if (!restaurantID || !name || !price || !ingredients) res.sendStatus(400).send("Incomplete recipe");
    const query = "INSERT INTO `recipes` (restaurantID, name, price, ingredients) VALUES (?, ?, ?, ?)";
    const params = [restaurantID, name, price, ingredients];
    connection.query(query, params, function (error, _, _) {
      if (error) throw error;
      res.sendStatus(200).send("Successfully added recipe");
    });
  },

  postNewWalkInClient: function (req, res) {
    const restaurantID = req.body["restaurantID"];
    const nbClients = req.body["nbClients"];
    const arrival = req.body["arrival"];
    const recipesIDs = req.body["recipesIDs"];

    if (!restaurantID || !nbClients || !arrival || !recipesIDs) res.sendStatus(400).send("Incomplete reservation");
    const query = "INSERT INTO `reservations` (restaurantID, nbClients, recipesIDs, arrivalTime) VALUES (?, ?, ?, ?)";
    const params = [restaurantID, nbClients, recipesIDs, arrival];
    connection.query(query, params, function (error, _, _) {
      if (error) throw error;
      res.sendStatus(200).send("Successfully added clients");
    });
  },
};
