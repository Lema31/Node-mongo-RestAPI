const Product = require("../model/Product.js");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(404).send(error.message);
  }
};

const getOneProduct = async (req, res) => {
  try {
    let { id } = req.params;
    const product = await Product.findById(id);
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(404).send(error.message);
  }
};

const getProductByCategory = async (req, res) => {
  try {
    let { category } = req.params;
    const products = await Product.find({ category: category });
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(404).send(error.message);
  }
};

const getProductByName = async (req, res) => {
  try {
    let { name } = req.params;
    const products = await Product.find({ name: { $regex: name } });
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(404);
  }
};

const addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.send("product added");
  } catch (error) {
    console.log(error);
    res.status(404).send(error.message);
  }
};

const purchaseProduct = async (req, res) => {
  try {
    let { id, quantity } = req.params;
    const product = await Product.findById(id);
    product.countInStock = product.countInStock - quantity;
    await product.save();
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(404).send(error.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    let { id } = req.params;
    await Product.findOneAndRemove({ _id: id });
    res.send("Product deleted");
  } catch (error) {
    console.log(error);
    res.status(404).send(error.message);
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  getProductByCategory,
  getProductByName,
  addProduct,
  purchaseProduct,
  deleteProduct,
};
