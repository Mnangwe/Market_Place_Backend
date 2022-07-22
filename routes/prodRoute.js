const express = require("express");
const router = express.Router();
const ProdController = require("../controllers/prodController");


router.post("/", ProdController.createProduct);

router.get("/show", ProdController.getProducts);

module.exports = router;
