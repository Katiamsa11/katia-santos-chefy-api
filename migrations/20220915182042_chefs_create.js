exports.up = function (knex) {
  return knex.schema
    .createTable("chefs", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("location").notNullable();
      table.integer("rating").notNullable().defaultTo(0);
      table.string("bio").notNullable();
      table.string("longBio").notNullable();
      table.string("image").notNullable();
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("reviews", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("description").notNullable();
      table
        .integer("chefs_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("chefs")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("cuisines", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table
        .integer("chefs_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("chefs")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("images", (table) => {
      table.increments("id").primary();
      table.string("images").notNullable();
      table
        .integer("chefs_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("chefs")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("reviews")
    .dropTable("cuisines")
    .dropTable("chefs")
    .dropTable("images");
};
