const router = require("express").Router();
const knex = require("knex")(require("../knexfile"));

//post a booking
router.route("/").post(async (req, res) => {
  // Validate the request body for required data
  if (
    !req.body.fullName ||
    !req.body.eventName ||
    !req.body.eventAddress ||
    !req.body.eventDate ||
    !req.body.guests ||
    !req.body.price ||
    !req.body.restrictions ||
    !req.body.details
  ) {
    return res.status(400).send("Please make sure to provide all fields");
  }
  try {
    const result = await knex("bookings").insert({
      fullName: req.body.fullName,
      eventName: req.body.eventName,
      eventAddress: req.body.eventAddress,
      eventDate: req.body.eventDate,
      guests: req.body.guests,
      price: req.body.price,
      restrictions: req.body.restrictions,
      details: req.body.details,
    });

    const createdBookings = await knex("bookings").where({ id: result[0] });

    res.status(201).json(createdBookings);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to create booking" });
  }
});

//get booking based on the chef ID

router.route("/").get(async (req, res) => {
  try {
    const bookingsData = await knex
      .select(
        "id",
        "fullName",
        "eventName",
        "eventAddress",
        "eventDate",
        "guests",
        "price",
        "restrictions"
      )
      .from("bookings");
    res.json(bookingsData);
  } catch (error) {
    res.status(500).json({ message: "unable to retrieve data" });
  }
});

//delete a booking based on the chef ID
router.route("/:id").delete(async (req, res) => {
  try {
    const result = await knex("bookings").where({ id: req.params.id }).del();

    if (result === 0) {
      return res
        .status(400)
        .json({ message: "booking not found, so could not delete" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Unable to delete booking" });
  }
});

module.exports = router;
