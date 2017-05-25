
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
    table.boolean('status');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
    table.dropColumn('user_name');
  });
};
