const app = require("./app");
require("dotenv").config();
const db = require("./db/connection");
const PORT = process.env.PORT;
const startServer = async () => {
  try {
    await db();
    app.listen(PORT, (e) => {
      if (e) {
        console.error(" server launch error", e);
        return;
      }
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  } catch (e) {
    console.error(" database launch error", e);
  }
};
startServer();
