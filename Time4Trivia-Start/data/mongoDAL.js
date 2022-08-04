// mongoDAL is responsible to for all interactions with mongodb for the trivia game
const {MongoClient} = require('mongodb');
const url = "mongodb+srv://Kolby123:Kolby123@cluster0.zsj8j.mongodb.net/test?retryWrites=true&w=majority";

async function main(){

}


exports.getAllQuestions = async function (){
    const db = await MongoClient.connect(url);
    var dbo = db.db("Time4Trivia");
    return await dbo.collection("Questions").find({}).toArray()
};

main().catch(console.error);