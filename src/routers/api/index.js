const express = require('express');
const router = express.Router();

const controller = require('../../controllers/api');

router.get('/', controller.handleScore);

module.exports = router;
