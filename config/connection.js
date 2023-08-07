// connect to db
const { connect, connection } = require('mongoose');

// there is some issue here that continues to give me ECONNREFUSED errors, may be compounded w dependency version issue?
connect('mongodb://127.0.0.1/developersApplications', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;