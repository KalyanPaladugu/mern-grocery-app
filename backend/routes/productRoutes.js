const controller= require('../controllers/productController');
const express =require('express')
const router = express.Router();;



router.post('/add-product', controller.createProduct);
module.exports = router;