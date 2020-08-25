import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("avatar", (table) => {
        table.increments("id").notNullable();
        table.string("name").notNullable();
        table.string("path").notNullable();

        table.string("market_id");
        table.foreign("market_id").references("id").inTable("markets");
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("avatar");
}
