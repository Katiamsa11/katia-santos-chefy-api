const router = require("express").Router();
const knex = require("knex")(require("../knexfile"));

router.route("/:id/reviews").get(async (req, res) => {
  try {
    const chefsData = await knex
      .select("*")
      .from("reviews")
      .where({ id: req.params.id });
    if (chefsData.length === 0) {
      return res.status(404).json({ message: "chef not found" });
    }
    res.json(chefsData[0]);
  } catch (error) {
    res.status(500).json({ message: "not found" });
  }
});

module.exports = router;
