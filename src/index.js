const app = require("./app.js");
const MONGODB_URI = require("./config.js");
const port = app.get("port");
require("./utils/mongoose.js");

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
