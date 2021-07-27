const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ding:wawxlyhz@product.xki9n.mongodb.net/Product?retryWrites=true&w=majority',{
  useNewUrlParser:true
});

const Blog = require('./../model/blog');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST,PUT, PATCH, DELETE, OPTIONS");
  next();
});

//add new blog 
app.post('/blogadd', (req,res,next) =>{
  const blog = new Blog({
    blogTitle:req.body.blogTitle,//标题
    blogSubtitle: req.body.blogSubtitle,//副标题
    blogTime:req.body.blogTime,//发布日期
    blogPicture:req.body.blogPicture,//图片
    blogLink: req.body.blogLink,//link
  });
  blog.save();
  res.status(201).json({
    message: 'POST SEND SUCCESFFULY'
  });
});

// display all blogs 
app.get('/blogs',(req, res, next) => {
    Blog.find().then(documents =>{
    res.json({
        blogs: documents
    });
  });
});


//update blog information by id
app.put('/blog/:id', (req, res, next)=>{
  const id= req.params.id;
  Blog.update({_id: id},{$set: 
    //updateOps
    {
        blogTitle:req.body.blogTitle,//标题
        blogSubtitle: req.body.blogSubtitle,//副标题
        blogTime:req.body.blogTime,//发布日期
        blogPicture:req.body.blogPicture,//图片
        blogLink: req.body.blogLink,//link
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

// delete blog detail by id//
app.delete('/blog/:id',(req, res, next) => {
    const id= req.params.id;
    Blog.remove({_id:id})
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