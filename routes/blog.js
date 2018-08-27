const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('blog', {
        title: '',
        metaTitle: '',
        metaDescription: '',
        scripts: []
    });
});

router.get('/:slug', (req, res, next) => {
    res.render('blog-article', {
        title: '',
        metaTitle: '',
        metaDescription: '',
        scripts: []
    });
});

module.exports = router;