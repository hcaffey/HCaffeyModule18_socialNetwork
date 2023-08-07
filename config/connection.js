// connect to db
const { connect, connection } = require('mongoose');

connect('mongodb://127.0.0.1/developersApplications', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;