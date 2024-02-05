const express = require('express');
const router = express.Router();
const newsControlller = require('../app/controllers/NewsController');

router.get('/:slug', newsControlller.show);
router.get('/',newsControlller.index);// tuyến đường chung nhất phải để ở dưới cùng để match các tuyến đường chi tiết hơn

module.exports = router;