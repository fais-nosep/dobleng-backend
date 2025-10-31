const knex = require('knex')({ client: 'sqlite3', connection: { filename: './data/db.sqlite' } });
(async () => {
  try {
    await knex.migrate.latest();
    console.log('Database initialized');
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();