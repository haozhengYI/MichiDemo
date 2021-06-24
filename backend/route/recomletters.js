const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ding:wawxlyhz@product.xki9n.mongodb.net/Product?retryWrites=true&w=majority',{
  useNewUrlParser:true
});

const Recomletter = require('./../model/recomletter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST,PUT, PATCH, DELETE, OPTIONS");
  next();
});

// manager add new recommend letter to school
app.post('/recomletteradd', (req,res,next) =>{
  const recomletter = new  Recomletter({
    schoolID:String, //对应申请学校的id
    studentID:String,//对应学生的id
    recommender:String,//推荐人id
    recommenderName:String,//推荐人名字
    type:String,//推荐信为 acedemic / professional
    state: String,//推荐信状态（提交/未提交/弃用）
  });
  recomletter.save();
  res.status(201).json({
    message: 'POST SEND SUCCESFFULY'
  });
});

// display all recommender letters
app.get('/recomletters',(req, res, next) => {
    Recomletter.find().then(documents =>{
    res.json({
        recomletters: documents
    });
  });
});

// display recommend letter detail by id
app.get('/recomletterdetail/:id', (req,res,next) =>{
    Recomletter.findById(req.params.id).then(documents =>{
      console.log(documents);
       res.json({
        recomletter: documents
       });
    });
});

// display all recommender letter list by school id
app.get('/schoolrecomletterlist/:schoolId', (req,res,next) =>{
    const schoolId = req.params.schoolId;
    Recomletter.find({schoolID: schoolId}).then(documents =>{
      res.json({
        recomletters: documents
      });
    });
  });

//update recommende letter information by id
app.put('/recomletters/:id', (req, res, next)=>{
  const id= req.params.id;
    Recomletter.update({_id: id},{$set: 
    //updateOps
    {
        schoolID:req.body.schoolID, //对应申请学校的id
        studentID:req.body.studentID,//对应学生的id
        recommender:req.body.recommender,//推荐人id
        recommenderName:req.body.recommenderName,//推荐人名字
        type:req.body.type,//推荐信为 acedemic / professional
        state: req.body.state,//推荐信状态（提交/未提交/弃用）
    }
  })
  .exec()
  .then((result)=>{
      console.log(result);
      res.status(200).json(result);
  })
  .catch(err =>{
      console.log(err);
      res.status(500).json({
          error: err
      })
  });
  res.status(201).json({
    message: 'Update Successfully',
  });
});

// delete recommender detail by id//
app.delete('/recomletters/:id',(req, res, next) => {
    const id= req.params.id;
    Recomletter.remove({_id:id})
    .exec()
    .then(result=>{
      res.status(200).json(result);
    })
    .catch(err=>{console.log(err);
      res.status(500).json({
        error:err
      });
    });
  });

module.exports = app;