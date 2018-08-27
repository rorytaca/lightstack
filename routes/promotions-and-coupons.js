const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('promotions-and-coupons', {
        title: '',
        metaTitle: '',
        metaDescription: '',
        scripts: []
    });
});

module.exports = router;