require('dotenv').config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
// const warehousesRoutes = require("./Routes/warehouses.js");
// const inventoriesRoutes = require("./Routes/inventories.js");
let PORT = process.env.PORT || 8080;


app.use(cors());

app.use(express.json());

// //linked the warehouse routes
// app.use("/warehouses", warehousesRoutes);
// app.use("/inventories", inventoriesRoutes);

app.listen(PORT, () => {
  console.log(`I'm here and I'm listening on port`+ ' ' + PORT );
});