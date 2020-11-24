const express = require("express");
const imageController = require("../Controller/imageController.js");
const router = express.Router();

router.post('/convert', imageController.convertWebp, (req, res) => {

  res.status(200).json(res.locals.path);
});
module.exports = router;


