const express = require('express');
const { requireSignin, userMiddleware } = require('../common-middleware');
const { addToCart, getCartItems, removeCartItems } = require('../controllers/cart');


const router = express.Router();

router.post('/cart/addToCart', requireSignin, userMiddleware, addToCart);
router.get('/cart/getCartItems', requireSignin, userMiddleware, getCartItems);
router.post('/cart/removeItem', requireSignin, userMiddleware, removeCartItems);

module.exports = router;
