const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ding:wawxlyhz@product.xki9n.mongodb.net/Product?retryWrites=true&w=majority',{
  useNewUrlParser:true
});

const Student = require('../model/student');
const School = require('./../model/school');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST,PUT, PATCH, DELETE, OPTIONS");
  next();
});

// manager add new school to student
app.post('/schooladd', (req,res,next) =>{
  const school = new School({
    userAccount:req.body.userAccount,
    state: req.body.state, //申请状态（四种：进行，完成，收到offer，收到拒信）
    univName: req.body.univName,//大学名称
    schoolName: req.body.schoolName,//学院名称
    majorName: req.body.majorName,//专业名称
    ddl1: req.body.ddl1,//DDL 1
    ddl2: req.body.ddl2,//DDL 2
    ddl3: req.body.ddl3,//DDL 3
    interview: req.body.interview,//面试 （两种：有-参加时间，无，）
    videoEssay: req.body.videoEssay, // videoEssay(三种：无，申请前完成，申请后完成)
    link: req.body.link, //链接
    applyAccount:req.body.applyAccount,//申请账号
    applyPassword:req.body.applyPassword,//申请用密码
    other:req.body.other,
  });
  school.save();
  res.status(201).json({
    message: 'POST SEND SUCCESFFULY'
  });
});

// display all schools 
app.get('/schools',(req, res, next) => {
  School.find().then(documents =>{
    res.json({
      schools: documents
    });
  });
});

// display school detail by school id
app.get('/schooldetail/:id', (req,res,next) =>{
    School.findById(req.params.id).then(documents =>{
      console.log(documents);
       res.json({
         schools: documents
       });
    });
});



//update school information by id
app.put('/schools/:id', (req, res, next)=>{
  const id= req.params.id;
  School.update({_id: id},{$set: 
    //updateOps
    {
        userAccount:req.body.userAccount,
        state: req.body.state, //申请状态（四种：进行，完成，收到offer，收到拒信）
        univName: req.body.univName,//大学名称
        schoolName: req.body.schoolName,//学院名称
        majorName: req.body.majorName,//专业名称
        ddl1: req.body.ddl1,//DDL 1
        ddl2: req.body.ddl2,//DDL 2
        ddl3: req.body.ddl3,//DDL 3
        interview: req.body.interview,//面试 （两种：有-参加时间，无，）
        videoEssay: req.body.videoEssay, // videoEssay(三种：无，申请前完成，申请后完成)
        link: req.body.link, //链接
        applyAccount:req.body.applyAccount,//申请账号
        applyPassword:req.body.applyPassword,//申请用密码
        other:req.body.other,
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
app.delete('/schools/:id',(req, res, next) => {
    const id= req.params.id;
    School.remove({_id:id})
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