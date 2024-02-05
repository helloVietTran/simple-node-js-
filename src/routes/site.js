const express = require('express');
const router = express.Router();
const siteControlller = require('../app/controllers/SiteController');

router.get('/about',siteControlller.about);// tuyến đường chung nhất phải để ở dưới cùng để match các tuyến đường chi tiết hơn
router.get('/', siteControlller.home);
module.exports = router;