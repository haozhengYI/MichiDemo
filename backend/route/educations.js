const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ding:wawxlyhz@product.xki9n.mongodb.net/Product?retryWrites=true&w=majority',{
  useNewUrlParser:true
});

const Education = require('./../model/education');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST,PUT, PATCH, DELETE, OPTIONS");
  next();
});

//add new educations to student
app.post('/educationadd', (req,res,next) =>{
  const education = new Education({
    userAccount:req.body.userAccount,//存储学生ID
    type: req.body.type,//类型：本科，研究生，高中
    educationName: req.body.educationName,
    educationLocation:req.body.educationLocation,
    educationStart:req.body.educationStart,//在校起始日期
    educationEnd:req.body.educationEnd,//在校结束日期
    major: req.body.major,
    Degree:req.body.Degree,
    GPA:req.body.GPA,
    MajorGPA:req.body.MajorGPA,//专业GPA
    SecondDegree:req.body.SecondDegree,//双专业
    SecondGPA:req.body.SecondGPA,//第二专业 GPA
    other:req.body.other,
  });
  education.save();
  res.status(201).json({
    message: 'POST SEND SUCCESFFULY'
  });
});

// display all educations 
app.get('/educations',(req, res, next) => {
    Education.find().then(documents =>{
    res.json({
        educations: documents
    });
  });
});

// display education detail by id
app.get('/educationdetail/:id', (req,res,next) =>{
    Education.findById(req.params.id).then(documents =>{
      console.log(documents);
       res.json({
        education: documents
       });
    });
});

// display educations detail by student id
app.get('/studenteducationlist/:studentId', (req,res,next) =>{
    const studentId = req.params.studentId;
    Education.find({userAccount: studentId}).then(documents =>{
      res.json({
        educations: documents
      });
    });
  });



//update school information by id
app.put('/education/:id', (req, res, next)=>{
  const id= req.params.id;
  Education.update({_id: id},{$set: 
    //updateOps
    {
        userAccount:req.body.userAccount,//存储学生ID
        type: req.body.type,//类型：本科，研究生，高中
        educationName: req.body.educationName,
        educationLocation:req.body.educationLocation,
        educationStart:req.body.educationStart,//在校起始日期
        educationEnd:req.body.educationEnd,//在校结束日期
        major: req.body.major,
        Degree:req.body.Degree,
        GPA:req.body.GPA,
        MajorGPA:req.body.MajorGPA,//专业GPA
        SecondDegree:req.body.SecondDegree,//双专业
        SecondGPA:req.body.SecondGPA,//第二专业 GPA
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
app.delete('/education/:id',(req, res, next) => {
    const id= req.params.id;
    Education.remove({_id:id})
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