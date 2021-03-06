const express = require('express');
const router = express.Router({mergeParams: true});
const wrapAsync = require('../utils/wrapAsync');
const reviews = require('../controllers/reviews')
const { isLoggedIn } = require('../middleware')

router.post('/', isLoggedIn, wrapAsync(reviews.createReview))

router.delete('/:reviewId', wrapAsync(reviews.deleteReview))

module.exports = router;
