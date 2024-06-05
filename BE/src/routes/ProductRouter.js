const express = require("express");
const router = express.Router()
const ProductController = require('../controllers/ProductController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', authMiddleWare,ProductController.createProduct)
router.put('/update/:id', ProductController.updateProduct)
router.delete('/delete/:id',ProductController.deleteProduct)
router.get('/details/:id',ProductController.getDetailsProduct)
router.get('/get-all', authMiddleWare,ProductController.getAllProduct) //, authMiddleWare

module.exports = router; 