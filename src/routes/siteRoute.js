const siteController = require('../app/controllers/SiteController')
const express = require('express')
const router = express.Router()


router.get('/about', siteController.about)
router.get('/', siteController.home)

module.exports = router