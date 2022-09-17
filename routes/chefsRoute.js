const router = require("express").Router();
const knex = require("knex")(require("../knexfile"));

router.route("/").get(async (req, res) => {
  try {
    const chefsData = await knex.select("*").from("chefs");
    res.json(chefsData);
  } catch (error) {
    res.status(500).json({ message: "unable to retrieve data" });
  }
});

router.route("/:id").get(async (req, res) => {
  try {
    const chefsData = await knex
      .select("*")
      .from("chefs")
      .where({ id: req.params.id });
    if (chefsData.length === 0) {
      return res.status(404).json({ message: "chef not found" });
    }
    res.json(chefsData[0]);
  } catch (error) {
    res.status(500).json({ message: "not found" });
  }
});

router.route("/data/:id").get(async (req, res) => {
  try {
    const data = await knex
      .from("chefs")
      .innerJoin("cuisines", "chefs.id", "cuisines.chefs_id")
      .innerJoin("images", "chefs.id", "images.chefs_id")
      .innerJoin("reviews", "chefs.id", "reviews.chefs_id")
      .where("chefs.id", req.params.id);
    if (data.length === 0) {
      return res.status(404).json({ message: "chef not found" });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "not found" });
  }
});

module.exports = router;
