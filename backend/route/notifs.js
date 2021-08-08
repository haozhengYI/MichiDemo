const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ding:wawxlyhz@product.xki9n.mongodb.net/Product?retryWrites=true&w=majority',{
  useNewUrlParser:true
});

const Notif = require('./../model/notif');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST,PUT, PATCH, DELETE, OPTIONS");
  next();
});

//add new notif 
app.post('/notifadd', (req,res,next) =>{
  const notif = new Notif({
    userAccount:req.body.userAccount,//学生的id
    content: req.body.content,//存储通知内容
    ndate:req.body.ndate,//通知日期
    nstate:req.body.nstate,//通知状态（"未读/已读"）
    ntype:req.body.ntype,//通知类型（"紧急/一般/比较紧急")
  });
  notif.save();
  res.status(201).json({
    message: 'POST SEND SUCCESFFULY'
  });
});

// display all notifs 
app.get('/notifs',(req, res, next) => {
    Notif.find().then(documents =>{
    res.json({
        notifs: documents
    });
  });
});


module.exports = app;