const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ding:wawxlyhz@product.xki9n.mongodb.net/Product?retryWrites=true&w=majority',{
  useNewUrlParser:true
});

const Honor = require('./../model/honor');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST,PUT, PATCH, DELETE, OPTIONS");
  next();
});

//add new honors to student
app.post('/honoradd', (req,res,next) =>{
  const honor = new Honor({
    userAccount:req.body.userAccount,//存储学生ID
    honorDate: req.body.honorDate,
    prize:req.body.prize,
    percentage:req.body.percentage,
    grantor: req.body.grantor,
  });
  honor.save();
  res.status(201).json({
    message: 'POST SEND SUCCESFFULY'
  });
});

// display all honors 
app.get('/honors',(req, res, next) => {
    Honor.find().then(documents =>{
    res.json({
        honors: documents
    });
  });
});

// display honor detail by id
app.get('/honordetail/:id', (req,res,next) =>{
    Honor.findById(req.params.id).then(documents =>{
      console.log(documents);
       res.json({
        honor: documents
       });
    });
});

// display honors detail by student id
app.get('/studenthonorlist/:studentId', (req,res,next) =>{
    const studentId = req.params.studentId;
    Honor.find({userAccount: studentId}).then(documents =>{
      res.json({
        honors: documents
      });
    });
  });



//update activity information by id
app.put('/honor/:id', (req, res, next)=>{
  const id= req.params.id;
  Honor.update({_id: id},{$set: 
    //updateOps
    {
        userAccount:req.body.userAccount,//存储学生ID
        honorDate: req.body.honorDate,
        prize:req.body.prize,
        percentage:req.body.percentage,
        grantor: req.body.grantor,
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

// delete honor detail by id//
app.delete('/honor/:id',(req, res, next) => {
    const id= req.params.id;
    Honor.remove({_id:id})
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