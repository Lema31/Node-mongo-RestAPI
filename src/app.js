const express = require("express");
const app = express();
const PORT = require("./config.js").PORT;
const { inventoryRouter } = require("./routes/inventory.route.js");

//settings
app.set("port", PORT || 3000);

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use(inventoryRouter);

//missing connection to public route
app.use((req, res, next) => {
  res.status(404).send("Page not Found");
  next();
});

module.exports = app;
