const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ding:wawxlyhz@product.xki9n.mongodb.net/Product?retryWrites=true&w=majority',{
  useNewUrlParser:true
});


const Student = require('../model/student');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST,PUT, PATCH, DELETE, OPTIONS");
  next();
});



// user add student
app.post('/studentadd', (req,res,next) =>{
  const student = new Student({
    userAccount:req.body.userAccount,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    name: req.body.name,
    location : req.body.location,
    gender: req.body.gender,
  });
  student.save();
  res.status(201).json({
    message: 'POST SEND SUCCESFFULY'
  });
});

// display all students
app.get('/students',(req, res, next) => {
  Student.find().then(documents =>{
    res.json({
      students: documents
    });
  });
});

// display student detail by id
app.get('/studentdetail/:id', (req,res,next) =>{
    Student.findById(req.params.id).then(documents =>{
      console.log(documents);
       res.json({
         students: documents
       });
    });
});



//update student information include firstname as well
app.put('/hotels/:userAccount', (req, res, next)=>{
  const userAccount = req.params.userAccount;
  // const updateOps ={};
  // for(const ops of req.body){
  //     updateOps[ops.propName] = ops.vaule;
  // }
  Student.update({userAccount: userAccount},{$set: 
    //updateOps
    {
      userAccount:req.body.userAccount,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      name: req.body.name,
      location: req.body.location,
      gender: req.body.gender,
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



//获取hotelM信息的get方法  与 hm.service.ts get方法相关联
// app.get('/hotels', (req, res, next) => {
//   Hotel.find().then(documents =>{
//     res.json({
//       message: 'fetched succesfully',
//       Hotel: documents
//     });
//   });
// });
module.exports = app;