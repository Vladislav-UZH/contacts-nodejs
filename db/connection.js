const mongoose = require("mongoose");

const connectToDatabase = async () => {
  mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
module.exports = connectToDatabase;
