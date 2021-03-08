const express = require('express');
const router = express.Router({mergeParams: true});
const passport = require('passport');
const wrapAsync = require('../utils/wrapAsync');
const { isLoggedIn } = require('../middleware')
const cart = require('../controllers/cart');

router.get('/', wrapAsync(cart.renderCart))


module.exports = router;
