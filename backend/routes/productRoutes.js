const controller= require('../controllers/productController');
const express =require('express');
const router = express.Router();
const upload = require('../middleware/imageMiddleware')
const protected = require('../middleware/adminMiddleware');
const searchController = require('../controllers/searchController')
router.post('/add-product',upload.single('image'),protected.adminMiddleware, controller.createProduct);
router.get('/show-products', controller.getProduct);
router.get('/search',searchController.searchProduts);
module.exports = router;