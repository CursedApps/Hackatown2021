const connection = require("./database");


module.exports = {
  getAllRestaurants: function(req, res) {
    console.log("HELLO")
    connection.query(
      "SELECT * FROM `restaurants`",
      function(error, results, _) {
        if (error) console.log(error);
        res.json(results);
      }
    );
  },

  getRestaurantInfo: function(req, res) {
    if(!req.params.restaurantID) {
      res.sendStatus(400).send("No restaurant ID");
    }
    connection.query(
      "SELECT * FROM `restaurants` WHERE restaurantID = ? LIMIT 1", req.params.restaurantID,
      function(error, results, _) {
        if (error) throw error;
        res.json(results);
      }
    );
  },

  postReservation: function(req, res) {
    const restaurantID = req.body["restaurantID"];
    const nbClients = req.body["nbClients"];
    const arrival = req.body["arrival"];
    const recipesIDs = req.body["recipesIDs"];

    if(!restaurantID || !nbClients || !arrival || !recipesIDs) res.sendStatus(400).send("Incomplete reservation");
    const query = "INSERT INTO `reservations` (restaurantID, nbClients, recipesIDs, arrivalTime) VALUES (?, ?, ?, ?)";
    const params = [restaurantID, nbClients, recipesIDs, arrival];
    connection.query(query, params,
      function(error, _, _) {
        if (error) throw error;
       res.sendStatus(200).send("Successfully added reservation");
      }
    );
  }
}