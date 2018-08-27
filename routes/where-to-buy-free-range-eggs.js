const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('where-to-buy-free-range-eggs', {
        title: '',
        metaTitle: '',
        metaDescription: '',
        scripts: []
    });
});

module.exports = router;