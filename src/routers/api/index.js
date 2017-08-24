const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const controller = require('../../controllers/api');

//router.get('/', controller.handleScore);
router.post('/watson', bodyParser.json({}), (req, res, next) => {
  console.log(req.body);
  const branchName = req.body.branchName;
  const programType = req.body.programType;
  const time = req.body.time;

  controller.getPrediction(branchName, programType, time).then((score) => {
  	res.send(score);
  	res.status(204).end();
  });
});

router.get('/watson', (req, res, next) => {
  res.send(controller.readScore());
});

module.exports = router;
