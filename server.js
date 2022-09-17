require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const chefsRoutes = require("./routes/chefsRoute.js");
// const inventoriesRoutes = require("./Routes/inventories.js");
const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(express.json());

// added middleware to allow to serve static files
app.use("/assets", express.static("./assets"));
app.use("/assets/food", express.static("./assets/food"));

// //linked the warehouse routes
app.use("/chefs", chefsRoutes);

// basic home route
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
