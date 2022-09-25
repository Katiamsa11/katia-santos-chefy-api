const router = require("express").Router();
const knex = require("knex")(require("../knexfile"));

//get reviews associated with each specific chef

router.route("/:id/review").get(async (req, res) => {
  try {
    const chefsReviews = await knex
      .select("*")
      .from("reviews")
      .where({ chefs_id: req.params.id });
    if (chefsReviews.length === 0) {
      return res.status(404).json({ message: "chef not found" });
    }
    res.json(chefsReviews);
  } catch (error) {
    res.status(500).json({ message: "not found" });
  }
});

module.exports = router;
