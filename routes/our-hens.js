const express = require('express');
const router = express.Router();

router.get('/free-range-hens', (req, res, next) => {
    res.render('our-hens', {
        title: '',
        metaTitle: '',
        metaDescription: '',
        scripts: []
    });
});

router.get('/free-range-farms', (req, res, next) => {
    res.render('our-farms', {
        title: '',
        metaTitle: '',
        metaDescription: '',
        scripts: []
    });
});

module.exports = router;