const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ding:wawxlyhz@product.xki9n.mongodb.net/Product?retryWrites=true&w=majority',{
  useNewUrlParser:true
});

const Blog = require('./../model/interview');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST,PUT, PATCH, DELETE, OPTIONS");
  next();
});

//add new interview
app.post('/interviewadd', (req,res,next) =>{
  const interview = new Interview({
    interviewUniv:req.body.interviewUniv,//题目对应大学
    interviewSchool:req.body.interviewSchool,//题目对应学院
    interviewProgram: req.body.interviewProgram,//题目对应项目
   interviewTitle:req.body.interviewTitle,//题目内容
   interviewCato: req.body.interviewCato,//题目类型（如kira，personal）
   interviewTime:req.body.interviewTime,//发布日期
   interviewPeople:req.body.interviewPeople,//发布人员
   interviewDuration: req.body.interviewDuration,//题目时长
   interviewOther:req.body.interviewOther,//其他备注信息

  });
  interview.save();
  res.status(201).json({
    message: 'POST SEND SUCCESFFULY'
  });
});

// display all interviews 
app.get('/interviews',(req, res, next) => {
    Interview.find().then(documents =>{
    res.json({
        interviews: documents
    });
  });
});


//update interview information by id
app.put('/interview/:id', (req, res, next)=>{
  const id= req.params.id;
  Interview.update({_id: id},{$set: 
    //updateOps
    {
        interviewUniv:req.body.interviewUniv,//题目对应大学
        interviewSchool:req.body.interviewSchool,//题目对应学院
        interviewProgram: req.body.interviewProgram,//题目对应项目
        interviewTitle:req.body.interviewTitle,//题目内容
        interviewCato: req.body.interviewCato,//题目类型（如kira，personal）
        interviewTime:req.body.interviewTime,//发布日期
        interviewPeople:req.body.interviewPeople,//发布人员
        interviewDuration: req.body.interviewDuration,//题目时长
        interviewOther:req.body.interviewOther,//其他备注信息
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

// delete interview detail by id//
app.delete('/interview/:id',(req, res, next) => {
    const id= req.params.id;
    Interview.remove({_id:id})
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