const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ding:wawxlyhz@product.xki9n.mongodb.net/Product?retryWrites=true&w=majority',{
  useNewUrlParser:true
});

const Publication = require('./../model/publication');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST,PUT, PATCH, DELETE, OPTIONS");
  next();
});

//add new publication to student
app.post('/publicationadd', (req,res,next) =>{
  const publication = new Publication({
    userAccount:req.body.userAccount,//存储学生ID
    PublicationTitle: req.body.PublicationTitle,
    PublicationJournal: req.body.PublicationJournal,//刊物
    PublicationDate: req.body.PublicationDate,//时间
    PublicationLink: req.body.PublicationLink,//链接
    PublicationAuthors: req.body.PublicationAuthors,
    PublicationAbstract: req.body.PublicationAbstract,
    PublicationLevel:req.body.PublicationLevel,
  });
  publication.save();
  res.status(201).json({
    message: 'POST SEND SUCCESFFULY'
  });
});

// display all publications 
app.get('/publications',(req, res, next) => {
    Publication.find().then(documents =>{
    res.json({
        publications: documents
    });
  });
});

// display publication detail by id
app.get('/publicationdetail/:id', (req,res,next) =>{
    Publication.findById(req.params.id).then(documents =>{
      console.log(documents);
       res.json({
        publication: documents
       });
    });
});

// display publications detail by student id
app.get('/studentpublicationlist/:studentId', (req,res,next) =>{
    const studentId = req.params.studentId;
    Publication.find({userAccount: studentId}).then(documents =>{
      res.json({
        publications: documents
      });
    });
  });



//update publication information by id
app.put('/publication/:id', (req, res, next)=>{
  const id= req.params.id;
  Publication.update({_id: id},{$set: 
    //updateOps
    {
        userAccount:req.body.userAccount,//存储学生ID
        PublicationTitle: req.body.PublicationTitle,
        PublicationJournal: req.body.PublicationJournal,//刊物
        PublicationDate: req.body.PublicationDate,//时间
        PublicationLink: req.body.PublicationLink,//链接
        PublicationAuthors: req.body.PublicationAuthors,
        PublicationAbstract: req.body.PublicationAbstract,
        PublicationLevel:req.body.PublicationLevel,
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
app.delete('/publication/:id',(req, res, next) => {
    const id= req.params.id;
    Publication.remove({_id:id})
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