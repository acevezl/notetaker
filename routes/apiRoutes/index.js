const router = require('express').Router();

const noteRoutes = require('./noteRoutes.js');
router.use(noteRoutes);

module.exports = router;