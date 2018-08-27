const express = require('express');
const router = express.Router();

router.get('/what-is-certified-humane', (req, res, next) => {
    res.render('certified-humane', {
        title: '',
        metaTitle: '',
        metaDescription: '',
        scripts: []
    });
});

router.get('/nellies-story', (req, res, next) => {
    res.render('nellies-story', {
        title: '',
        metaTitle: '',
        metaDescription: '',
        scripts: []
    });
});

module.exports = router;