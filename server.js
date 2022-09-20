require("dotenv").config();
const express = require("express");
const cors = require("cors");
const twilio = require("twilio");
const app = express();
const chefsRoutes = require("./routes/chefsRoute.js");
const imagesRoutes = require("./routes/imagesRoute.js");
const reviewsRoutes = require("./routes/reviewsRoute.js");
const eventsRoutes = require("./routes/eventsRoute.js");
const PORT = process.env.PORT || 8080;


app.use(cors());

app.use(express.json());

//twilio api
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

//send Text
app.get("/send-text", (req, res) => {
  //Welcome Message
  res.send("Hello to the Twilio Server");

  //_GET Variables
  const { recipient, textmessage } = req.query;

  //Send Text
  client.messages
    .create({
      body: textmessage,
      to: recipient, // Text this number
      from: "+17079857362", // From a valid Twilio number
    })
    .then((message) => console.log(message.body));
});

// added middleware to allow to serve static files
app.use("/assets", express.static("./assets"));
app.use("/assets/food", express.static("./assets/food"));

// //linked the chefs Routes
app.use("/chefs", chefsRoutes);

// //linked the food images 
app.use("/images", imagesRoutes);

// //linked the food images 
app.use("/reviews", reviewsRoutes);

//linked the users post
app.use("/events", eventsRoutes);

// basic home route
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
