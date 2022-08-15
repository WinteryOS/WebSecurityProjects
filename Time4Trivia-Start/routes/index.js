const express = require('express');
const router = express.Router();
const sqlDAL = require('../data/sqlDAL')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Time 4 Trivia', user: req.session.user });
});




router.get('/leaderboard', async function(req, res, next) {

  var scoreArray = await sqlDAL.getAllScores();
  console.log('this is the scoreArray + ' + scoreArray)

  res.render('leaderboard', { title: 'Time 4 Trivia', user: req.session.user, leaders: scoreArray });
});


module.exports = router;