/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("bookings", function (table) {
    table.increments("id");
    table.string("fullName").notNullable();
    table.string("eventName").notNullable();
    table.string("eventAddress", 555).notNullable();
    table.string("eventDate").notNullable();
    table.integer("guests").unsigned().notNullable();
    table.string("price", 555).notNullable();
    table.string("restrictions", 555).notNullable();
    table.string("details", 555).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  // delete the two tables
  return knex.schema.dropTable("bookings");
};
