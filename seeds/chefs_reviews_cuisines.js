// import seed data files, arrays of objects
const chefsData = require("../seed_data/chefs");
const reviewsData = require("../seed_data/reviews");
const cuisinesData = require("../seed_data/cuisines");

exports.seed = function (knex) {
  return knex("chefs")
    .del()
    .then(function () {
      return knex("chefs").insert(chefsData);
    })
    .then(() => {
      return knex("reviews").del();
    })
    .then(() => {
      return knex("reviews").insert(reviewsData);
    })
    .then(() => {
      return knex("cuisines").del();
    })
    .then(() => {
      return knex("cuisines").insert(cuisinesData);
    });
};
