const express = require("express");
const router = express.Router();
const { create , find } = require("../../controllers/comprehension_result");
const { SAVE , SEARCH_BY_EMAIL } = require("../../utils/config").ROUTES.COMPREHENSIONS_RESULT;

router.post(SAVE , create);
router.get(SEARCH_BY_EMAIL , find);
// router.get(COMPREHENSIONS_ALL , findAll);
module.exports = router;
