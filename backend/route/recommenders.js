const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ding:wawxlyhz@product.xki9n.mongodb.net/Product?retryWrites=true&w=majority',{
  useNewUrlParser:true
});

const Recommender = require('./../model/recommender');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST,PUT, PATCH, DELETE, OPTIONS");
  next();
});

// manager add new recommender to student
app.post('/recommenderadd', (req,res,next) =>{
  const recommender = new  Recommender({
    userAccount:req.body.userAccount, //对应学生的id
    firstName: req.body.firstName,//推荐人名字
    lastName: req.body.lastName,
    email: req.body.email,//推荐人email
    phone: req.body.phone,//
    title: req.body.title, // 推荐人职称
    location: req.body.location,//地址
    gender: req.body.gender,//性别
    education:req.body.education, //学历
    organization:req.body.organization, //所在单位
    duration:req.body.duration,//在此单位工作时间年限
    position:req.body.position, //职务
    relation:req.body.relation,//与申请者关系
    other:req.body.other,//其他信息
  });
  recommender.save();
  res.status(201).json({
    message: 'POST SEND SUCCESFFULY'
  });
});

// display all recommenders 
app.get('/recommenders',(req, res, next) => {
    Recommender.find().then(documents =>{
    res.json({
      schools: documents
    });
  });
});

// display recommender detail by id
app.get('/recommenderdetail/:id', (req,res,next) =>{
    Recommender.findById(req.params.id).then(documents =>{
      console.log(documents);
       res.json({
        recommenders: documents
       });
    });
});



//update recommender information by id
app.put('/recommenders/:id', (req, res, next)=>{
  const id= req.params.id;
    Recommender.update({_id: id},{$set: 
    //updateOps
    {
        userAccount:req.body.userAccount, //对应学生的id
        firstName: req.body.firstName,//推荐人名字
        lastName: req.body.lastName,
        email: req.body.email,//推荐人email
        phone: req.body.phone,//
        title: req.body.title, // 推荐人职称
        location: req.body.location,//地址
        gender: req.body.gender,//性别
        education:req.body.education, //学历
        organization:req.body.organization, //所在单位
        duration:req.body.duration,//在此单位工作时间年限
        position:req.body.position, //职务
        relation:req.body.relation,//与申请者关系
        other:req.body.other,//其他信息
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
app.delete('/recommenders/:id',(req, res, next) => {
    const id= req.params.id;
    Recommender.remove({_id:id})
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