import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("files", (table) => {
        table.increments("id").notNullable();
        table.string("name").notNullable();
        table.string("path").notNullable();

        table.string("product_id");
        table.foreign("product_id").references("id").inTable("products");
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("files");
}
