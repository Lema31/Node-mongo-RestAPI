const { Router } = require("express");
const {
  getAllProducts,
  getOneProduct,
  getProductByCategory,
  getProductByName,
  addProduct,
  purchaseProduct,
  deleteProduct,
} = require("../controllers/inventory.controllers.js");

const inventoryRouter = Router();

inventoryRouter
  .get("/inventory", getAllProducts)
  .post("/inventory", addProduct);

inventoryRouter
  .get("/inventory/:id", getOneProduct)
  .delete("/inventory/:id", deleteProduct);

inventoryRouter.get("/inventory/category/:category", getProductByCategory);

inventoryRouter.get("/inventory/name/:name", getProductByName);

inventoryRouter.put("/purchase/:id/:quantity", purchaseProduct);

module.exports = { inventoryRouter };
