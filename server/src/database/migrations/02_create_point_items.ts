import Knex from   'knex';

export async function up(knex: Knex){
    //Criar a Tabela
    return knex.schema.createTable('point_items', table =>{
        table.increments('id').primary();
        table.integer('point_id')
        .notNullable()
        .references('id')
        .inTable('points');
        table.integer('item_id')
        .notNullable()
        .notNullable()
        .references('id')
        .inTable('items');
      
    });
}

export async function down(knex: Knex){
    //Voltar atras (deletar a tabela)
   return knex.schema.dropTable('point-items');

}