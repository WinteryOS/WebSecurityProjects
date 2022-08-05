const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const sqlDAL = require('../data/sqlDAL')

router.get('/play', async function(req, res) {
  var questionsArray = await sqlDAL.getAllQuestions()
  console.log("This is the questions array: " +  questionsArray)
  
  res.render('play', { title: 'Time 4 Trivia',user: req.session.user, questions: questionsArray});
});


module.exports = router;