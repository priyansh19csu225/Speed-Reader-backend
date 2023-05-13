const express = require("express");
const router = express.Router();
const { create  , find , findAll} = require("../../controllers/comprehension");
const { INSERT , SEARCH_BY_ID , COMPREHENSIONS_ALL} = require("../../utils/config").ROUTES.COMPREHENSIONS;

router.post(INSERT , create);
router.get(SEARCH_BY_ID , find);
router.get(COMPREHENSIONS_ALL , findAll);
module.exports = router;
