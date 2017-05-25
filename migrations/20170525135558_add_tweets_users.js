
exports.up = function(knex, Promise) {
  return knex.schema.table('tweets', function(table) {
    table.string('user_name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('tweets', function(table) {
    table.dropColumn('user_name');
  });
};
