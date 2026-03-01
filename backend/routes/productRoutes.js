const controller= require('../controllers/productController');
const express =require('express');
const router = express.Router();
const upload = require('../middleware/imageMiddleware')
const protected = require('../middleware/adminMiddleware');

router.post('/add-product',upload.single('image'),protected.adminMiddleware, controller.createProduct);
router.get('/get-products', controller.getProduct);
module.exports = router;