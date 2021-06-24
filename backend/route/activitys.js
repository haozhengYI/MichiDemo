const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ding:wawxlyhz@product.xki9n.mongodb.net/Product?retryWrites=true&w=majority',{
  useNewUrlParser:true
});

const Activity = require('./../model/activity');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST,PUT, PATCH, DELETE, OPTIONS");
  next();
});

//add new activitys to student
app.post('/activityadd', (req,res,next) =>{
  const activity = new Activity({
    userAccount:req.body.userAccount,//存储学生ID
    activityOrganization: req.body.activityOrganization,
    activityStart:req.body.activityStart,//起始日期
    activityEnd:req.body.activityEnd,//结束日期
    activityPosition: req.body.activityPosition,
    activityDescription:req.body.activityDescription,
  });
  activity.save();
  res.status(201).json({
    message: 'POST SEND SUCCESFFULY'
  });
});

// display all activitys 
app.get('/activitys',(req, res, next) => {
    Activity.find().then(documents =>{
    res.json({
        activitys: documents
    });
  });
});

// display activity detail by id
app.get('/activitydetail/:id', (req,res,next) =>{
    Activity.findById(req.params.id).then(documents =>{
      console.log(documents);
       res.json({
        activity: documents
       });
    });
});

// display activitys detail by student id
app.get('/studentactivitylist/:studentId', (req,res,next) =>{
    const studentId = req.params.studentId;
    Activity.find({userAccount: studentId}).then(documents =>{
      res.json({
        activitys: documents
      });
    });
  });



//update activity information by id
app.put('/activity/:id', (req, res, next)=>{
  const id= req.params.id;
  Activity.update({_id: id},{$set: 
    //updateOps
    {
        userAccount:req.body.userAccount,//存储学生ID
        activityOrganization: req.body.activityOrganization,
        activityOrganization: req.body.activityOrganization,
        activityStart:req.body.activityStart,//起始日期
        activityEnd:req.body.activityEnd,//结束日期
        activityPosition: req.body.activityPosition,
        activityDescription:req.body.activityDescription,
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

// delete activity detail by id//
app.delete('/activity/:id',(req, res, next) => {
    const id= req.params.id;
    Activity.remove({_id:id})
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