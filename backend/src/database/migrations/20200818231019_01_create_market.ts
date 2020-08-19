import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("markets", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("email").notNullable().unique();
        table.string("password").notNullable();
        table.string("whatsapp").notNullable();
        table.string("address").notNullable();
        table.string("address_number").notNullable();
        table.string("address_complement");
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("markets");
}
