const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ding:wawxlyhz@product.xki9n.mongodb.net/Product?retryWrites=true&w=majority',{
  useNewUrlParser:true
});

const Experience = require('./../model/experience');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST,PUT, PATCH, DELETE, OPTIONS");
  next();
});

//add new experiences to student
app.post('/experienceadd', (req,res,next) =>{
  const experience = new Experience({
    userAccount:req.body.userAccount,//存储学生ID
    type: req.body.type,//类型：教学科研/工作经历
    institution: req.body.institution,
    institutionLocation:req.body.institutionLocation,
    experienceStart:req.body.experienceStart,//经历起始日期
    experienceEnd:req.body.experienceEnd,//经历结束日期
    experienceposition: req.body.experienceposition,
    responsibilities:req.body.responsibilities,
    project:req.body.project,
    achievement:req.body.achievement,
  });
  experience.save();
  res.status(201).json({
    message: 'POST SEND SUCCESFFULY'
  });
});

// display all experiences 
app.get('/experiences',(req, res, next) => {
    Experience.find().then(documents =>{
    res.json({
        experiences: documents
    });
  });
});

// display experience detail by id
app.get('/experiencetail/:id', (req,res,next) =>{
    Experience.findById(req.params.id).then(documents =>{
      console.log(documents);
       res.json({
        experience: documents
       });
    });
});

// display experience detail by student id
app.get('/studentexperiencelist/:studentId', (req,res,next) =>{
    const studentId = req.params.studentId;
    Experience.find({userAccount: studentId}).then(documents =>{
      res.json({
        experiences: documents
      });
    });
  });



//update school information by id
app.put('/experience/:id', (req, res, next)=>{
  const id= req.params.id;
  Experience.update({_id: id},{$set: 
    //updateOps
    {
        userAccount:req.body.userAccount,//存储学生ID
        type: req.body.type,//类型：教学科研/工作经历
        institution: req.body.institution,
        institutionLocation:req.body.institutionLocation,
        experienceStart:req.body.experienceStart,//经历起始日期
        experienceEnd:req.body.experienceEnd,//经历结束日期
        experienceposition: req.body.experienceposition,
        responsibilities:req.body.responsibilities,
        project:req.body.project,
        achievement:req.body.achievement,
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
    message: 'Handling PUT requests to /Connections',
  });
});

// delete school detail by id//
app.delete('/experience/:id',(req, res, next) => {
    const id= req.params.id;
    Experience.remove({_id:id})
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