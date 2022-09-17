// import seed data files, arrays of objects
const chefsData = require("../seed_data/chefs.js");
const reviewsData = require("../seed_data/reviews.js");
const cuisinesData = require("../seed_data/cuisines.js");
const imagesData = require("../seed_data/images.js");

exports.seed = function (knex) {
  return knex("chefs")
    .del()
    .then(function () {
      return knex("chefs").insert(chefsData);
    })
    .then(() => {
      return knex("cuisines").del();
    })
    .then(() => {
      return knex("cuisines").insert(cuisinesData);
    })
    .then(() => {
      return knex("images").del();
    })
    .then(() => {
      return knex("images").insert(imagesData);
    })
    .then(() => {
      return knex("reviews").del();
    })
    .then(() => {
      return knex("reviews").insert(reviewsData);
    });
};
