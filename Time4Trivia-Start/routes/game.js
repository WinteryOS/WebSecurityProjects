const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const sqlDAL = require('../data/sqlDAL')

let answers = [];

router.post('/play', async function(req, res) { 


  for (let index = 1; index < 6; index++) {
    answers.push(req.body[index]);
    console.log(answers)
   
  }
correctAnswerArray = await sqlDAL.getAllAnswers();
// for (let index = 0; index < answers.length; index++) {
//   const correct = correctAnswerArray[index];
//   const submitted = answers[index];
//   if(correct === submitted){
//     console.log('Answer Correct');
//   }else {
//     console.log('answer incorrect')
//   }

  
// }

let correctAnswers = [];
correctAnswerArray.forEach(element => {
  console.log(element.correct_answer)
  correctAnswers.push(element.correct_answer);
});
console.log(correctAnswers)
})



router.get('/play', async function(req, res) {
  var questionsArray = await sqlDAL.getAllQuestions()
  console.log("This is the questions array: " +  questionsArray)
  

  res.render('play', { title: 'Time 4 Trivia', user: req.session.user, questions: questionsArray});
});


module.exports = router;