const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const cwd = process.cwd();
// most of the code in this repo informed by exercise 26 and mini proj
const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server for ${activity} running on port ${PORT}!`);
    });
  });