const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const sqlDAL = require('../data/sqlDAL')
const indexFile = require('../routes/index');

let answers = [];

router.post('/play', async function(req, res) { 


  for (let index = 1; index < 6; index++) {
    answers.push(req.body[index]);
    console.log(answers)
   
  }
correctAnswerArray = await sqlDAL.getAllAnswers();


let correctAnswers = [];


correctAnswerArray.forEach(element => {
  console.log(element.correct_answer)
  correctAnswers.push(element.correct_answer);
});
console.log(correctAnswers)


var playerScore = 0;
for (let index = 0; index < answers.length; index++) {


  const correct = correctAnswers[index];
  const submitted = answers[index];

  console.log(correct);
  console.log(submitted);
  
  if(correct == submitted){
    console.log('Answer Correct');
    playerScore = playerScore + 100;

  }else {
    console.log('answer incorrect')
  }
  console.log(playerScore);
}
answers = [];

// What should we return to the user next?
// To the leader board?
// console.log(req.session.user.username + "this is the user");
await sqlDAL.saveScoreToUser(playerScore, req.session.user.username);
// How do we handle the user's score
})





router.get('/play', async function(req, res) {
  var questionsArray = await sqlDAL.getAllQuestions()
  console.log("This is the questions array: " +  questionsArray)


  res.render('play', { title: 'Time 4 Trivia', user: req.session.user, questions: questionsArray});
});


module.exports = router;