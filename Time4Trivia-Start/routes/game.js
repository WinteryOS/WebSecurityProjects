const express = require('express');
const mongoDAL = require('../data/mongoDAL')
const router = express.Router();
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://Kolby123:Kolby123@cluster0.zsj8j.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

router.get('/play', async function(req, res, next) {
  var questionsArray = await mongoDAL.getAllQuestions()
  console.log("This is the questions array: " +  questionsArray)
  
  res.render('play', { title: 'Time 4 Trivia',user: req.session.user, questions: questionsArray});
});


module.exports = router;