const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('egg-recipes', {
        title: '',
        metaTitle: '',
        metaDescription: '',
        scripts: []
    });
});

router.get('/:slug', (req, res, next) => {
    res.render('egg-recipes-recipe', {
        title: '',
        metaTitle: '',
        metaDescription: '',
        scripts: []
    });
});

module.exports = router;