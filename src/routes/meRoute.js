const meController = require('../app/controllers/MeController');
const router = require('express').Router();

router.get("/courses", meController.courses)
router.delete("/:id/delete", meController.destroy)
module.exports = router
