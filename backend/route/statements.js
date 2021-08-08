const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ding:wawxlyhz@product.xki9n.mongodb.net/Product?retryWrites=true&w=majority',{
  useNewUrlParser:true
});

const Statement = require('./../model/statement');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST,PUT, PATCH, DELETE, OPTIONS");
  next();
});

//add new statement 
app.post('/statementadd', (req,res,next) =>{
  const statement = new Statement({
    schoolID:req.body.schoolID, //对应申请学校的id
    question: req.body.question,//题目内容
    stype:req.body.stype,//文书种类(PS/SOP/Essay)
    words:req.body.words,//字数
  });
  statement.save();
  res.status(201).json({
    message: 'POST SEND SUCCESFFULY'
  });
});

// display all statements 
app.get('/statements',(req, res, next) => {
    Statement.find().then(documents =>{
    res.json({
        statements: documents
    });
  });
});

// display all statements list by school id
app.get('/notifdetail/:schoolID', (req,res,next) =>{
    const schoolID = req.params.schoolID;
    Statement.find({schoolID: schoolID}).then(documents =>{
      res.json({
        statements: documents
      });
    });
  });

module.exports = app;