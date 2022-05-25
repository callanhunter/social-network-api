const { connect, connection } = require("mongoose");

const connectionString =
  process.env.MONGODB_URI ||
  "mongodb+srv://callanhunter:8DxemIqoQvNN1cmg@cluster0.xrqyw.mongodb.net/test";

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
