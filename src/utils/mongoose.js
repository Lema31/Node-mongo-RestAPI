const { connect } = require("mongoose");
const { MONGODB_URI } = require("../config");

(async () => {
  try {
    const db = await connect(MONGODB_URI);
    console.log("Db connected to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
