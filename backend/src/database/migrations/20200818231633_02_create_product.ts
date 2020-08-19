import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("products", (table) => {
        table.increments("id").notNullable();
        table.float("old_price").notNullable();
        table.float("new_price").notNullable();
        table.string("name").notNullable();
        table.string("description");

        table.string("market_id").notNullable();
        table.foreign("market_id").references("id").inTable("markets");
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("products");
}
