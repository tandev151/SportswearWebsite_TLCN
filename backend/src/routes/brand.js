const express = require('express');
const {addBrand, getBrands, deleteBrands} = require('../controller/brand');
const { requireSignin, adminMiddleware } = require('../common-middleware');


const router = express.Router();

router.post('/brand/add',requireSignin, adminMiddleware, addBrand);
router.get('/brand/getBrands', getBrands);
router.post('/brand/deleteBrands',requireSignin, adminMiddleware, deleteBrands);

module.exports = router;
