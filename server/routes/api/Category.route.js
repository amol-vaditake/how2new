const express = require('express');
const categoryrouter = express.Router();
const { createcategory, getallcategory, createquestion, getallquestion } = require('../../controllers/category.ctrl.')
const { athenticateadmin } = require('../../middlewares/adminauth')

categoryrouter.post('/add', athenticateadmin, createcategory);
categoryrouter.get('/get', athenticateadmin, getallcategory);
categoryrouter.post('/:catname/:catid', athenticateadmin, createquestion);
categoryrouter.get('/getallquestions/:catid', athenticateadmin, getallquestion);

module.exports = categoryrouter