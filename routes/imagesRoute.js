const router = require("express").Router();
const knex = require("knex")(require("../knexfile"));

//get images associated with each specific chef 

router.route("/:id/image").get(async (req, res) => {
  try {
    const chefsImages = await knex
      .select("*")
      .from("images")
      .where({ chefs_id: req.params.id });
    if (chefsImages.length === 0) {
      return res
        .status(404)
        .json({ message: "image that matches chef not found" });
    }
    res.json(chefsImages);
  } catch (error) {
    res.status(500).json({ message: "not found" });
  }
});

module.exports = router;
