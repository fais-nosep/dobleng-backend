const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex')({
  client: 'sqlite3',
  connection: { filename: './data/db.sqlite' },
});
const app = express();
app.use(bodyParser.json());
app.get('/health', (req, res) => res.json({ ok: true }));
app.listen(3000, () => console.log('Backend server is running on port 3000'));