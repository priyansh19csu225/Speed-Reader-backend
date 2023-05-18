const express = require("express");
const router = express.Router();
const { create  , find , findAll, returnDaily} = require("../../controllers/comprehension");
const { INSERT , SEARCH_BY_ID , COMPREHENSIONS_ALL , DAILY_COMPREHENSION} = require("../../utils/config").ROUTES.COMPREHENSIONS;

router.post(INSERT , create);
router.get(SEARCH_BY_ID , find);
router.get(COMPREHENSIONS_ALL , findAll);
router.get(DAILY_COMPREHENSION, returnDaily);
module.exports = router;
