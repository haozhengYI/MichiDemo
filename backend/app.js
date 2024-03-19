const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//mongoose.connect("mongodb://localhost/final", {useNewUrlParser:true});
mongoose.connect('mongodb+srv://ding:wawxlyhz@product.xki9n.mongodb.net/Product?retryWrites=true&w=majority',{
  useNewUrlParser:true
});
//import "./style.scss"

const Order = require('./model/order');


const User = require('./model/user');



const Hotel = require('./model/hotel');
const Student = require('./model/student');
const School = require('./model/school');
const Recommender = require('./model/recommender');
const Recomletter = require('./model/recomletter');
const Education = require('./model/education');
const Experience = require('./model/experience');
const Publication = require('./model/publication');
const Activity = require('./model/activity');
const Honor = require('./model/honor');
const Blog = require('./model/blog');
const Notif = require('./model/notif');
const Statement = require('./model/statement');
const Task = require('./model/task');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST,PUT, PATCH, DELETE, OPTIONS");
  next();
});

// user book hotel
app.post('/hotelbook', (req,res,next) =>{
  const order = new Order({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
    email: req.body.email,
    date: req.body.date,
    hotelId: req.body.hotelId,
    hotelName: req.body.hotelName,
    userId: req.body.userId
  });
  order.save();
  console.log("Save Order");
  res.status(201).json({
    message : 'POST SEND SUCCESFFULY'
  });
});

// add user
app.post('/users', (req,res,next) =>{
  const user = new  User({
    UserAccount: req.body.UserAccount,
    UserPassword: req.body.UserPassword,
    Role: req.body.Role
  });
  user.save();
  res.status(201).json({
    message: 'POST SEND SUCCESFFULY'
  });
});


// user add hotel
app.post('/hoteladd', (req,res,next) =>{
  const hotel = new Hotel({
    userAccount:req.body.userAccount,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    name: req.body.name,
    location : req.body.location,
    image: req.body.image,
    price: req.body.price
  });
  hotel.save();
  res.status(201).json({
    message: 'POST SEND SUCCESFFULY'
  });
});

// display all hotels
app.get('/hotels',(req, res, next) => {
  Hotel.find().then(documents =>{
    res.json({
      hotels: documents
    });
  });
});

// display hotel detail by id
app.get('/hoteldetail/:id', (req,res,next) =>{
    Hotel.findById(req.params.id).then(documents =>{
      console.log(documents);
       res.json({
         hotels: documents
       });
    });
});

//search hotel by name
app.get('/hotelsearch/:searchName', (req,res,next)=>{
  const searchName = req.params.searchName;
  console.log(searchName);
  Hotel.find({name: searchName}).then(documents =>{
    res.json({
        hotels:documents
    });
  })
});






// delete user detail by id//
app.delete('/users/:id',(req, res, next) => {
  const id= req.params.id;
  User.remove({_id:id})
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

//delete hotel detail by id//
app.delete('/hotels/:id',(req, res, next) => {
  const id= req.params.id;
  Hotel.remove({_id:id})
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

//delete order By order Id
app.delete('/orders/:id',(req, res, next) => {
  const id= req.params.id;
  Order.remove({_id:id})
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


//获取hotelM信息的get方法  与 hm.service.ts get方法相关联
// app.get('/orders', (req, res, next) => {
//   Order.find().then(documents =>{
//     res.json({
//       users: documents
//     });
//   });
// });

// display all users
app.get('/users',(req, res, next) => {
  User.find().then(documents =>{
    res.json({
      user: documents
    });
  });
});

//hotel manager 查看order的调用，返回json值得名称有所不同
app.get('/orders', (req, res, next) => {
  Order.find().then(documents =>{
    res.json({
      orders: documents
    });
  });
});

//update hotels information include hotel manager information and hotel's price
app.put('/hotels/:userAccount', (req, res, next)=>{
  const userAccount = req.params.userAccount;
  // const updateOps ={};
  // for(const ops of req.body){
  //     updateOps[ops.propName] = ops.vaule;
  // }
  Hotel.update({userAccount: userAccount},{$set:
    //updateOps
    {
      userAccount:req.body.userAccount,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      name: req.body.name,
      location: req.body.location,
      image: req.body.image,
      price : req.body.price,
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

//update hotel manager basic information especially password
app.put('/users/:UserAccount', (req, res, next)=>{
  const UserAccount = req.params.UserAccount;
  User.update({UserAccount: UserAccount},{$set:
    //updateOps
    {
      UserAccount: req.body.UserAccount,
      UserPassword: req.body.UserPassword,
      Role: req.body.Role,
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

// Find all orders under user
app.get('/vieworder/:userId', (req,res,next) => {
  const userId = req.params.userId;
  Order.find({userId: userId}).then(documents =>{
    res.json({
      orders: documents
    });
  });
})

//获取hotelM信息的get方法  与 hm.service.ts get方法相关联
// app.get('/hotels', (req, res, next) => {
//   Hotel.find().then(documents =>{
//     res.json({
//       message: 'fetched succesfully',
//       Hotel: documents
//     });
//   });
// });
//student route----------------------------------------------------------------------------------------------------------------
// display all students
app.get('/students',(req, res, next) => {
  Student.find().then(documents =>{
    res.json({
      students: documents
    });
  });
});
// user add student
app.post('/studentadd', (req,res,next) =>{
  const student = new Student({
    userAccount:req.body.userAccount,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    dob: req.body.dob, // 生日
    currentAddress: req.body.currentAddress,
    permanentAddress: req.body.permanentAddress,
    gender: req.body.gender,
    ssn: req.body.ssn,
    passport: req.body.passport,//护照或绿卡号码
    visa: req.body.visa,
    appEmail: req.body.appEmail,//申请所用的邮箱账号
    appPsw:req.body.appPsw,//申请所用的邮箱密码
    citizen:req.body.citizen,//国籍
    //标化成绩类
    TOEFL:req.body.TOEFL,
    TOEFLR:req.body.TOEFLR,//托福阅读
    TOEFLL:req.body.TOEFLL,//托福听力
    TOEFLS:req.body.TOEFLS,//托福口语
    TOEFLW:req.body.TOEFLW,//托福写作
    GRE: req.body.GRE,
    GREV: req.body.GREV,//GRE Verbal部分成绩
    GREVP: req.body.GREVP,
    GREQ: req.body.GREQ,
    GREQP: req.body.GREQP,
    GREW: req.body.GREW,
    GREWP: req.body.GREWP,
    GMAT: req.body.GMAT,//GMAT 部分
    GMATV: req.body.GMATV,
    GMATVP: req.body.GMATVP,
    GMATQ: req.body.GMATQ,
    GMATQP: req.body.GMATQP,
    GMATW: req.body.GMATW,
    GMATWP: req.body.GMATWP,
    GMATR: req.body.GMATR,
    GMATRP: req.body.GMATRP,
    OtherStandardTest: req.body.OtherStandardTest,//其他类标化成绩
    //Skills & Hobbies
    Language:req.body.Language, 
    ComputerSkills: req.body.ComputerSkills,//计算机技能
    OtherSkills: req.body.OtherSkills,//其他技能或证书
    Hobbies: req.body.Hobbies,//爱好
    //Professional Interest专业兴趣
    Professional1: req.body.Professional1,
    Professional2: req.body.Professional2,
    Professional3: req.body.Professional3,
    //Career Plan职业规划
    CareerPlan1: req.body.CareerPlan1,
    CareerPlan2: req.body.CareerPlan2,
    //Personal Strength个人优势
    Strength1: req.body.Strength1,
    Strength2: req.body.Strength2,
    //母亲信息
    MomName: req.body.MomName,
    MomAddress: req.body.MomAddress,
    MomOrganazation: req.body.MomOrganazation,
    MomJob: req.body.MomJob,
    MomEducation:req.body.MomEducation,//母亲最高学历
    MomSchool:req.body.MomSchool,//母亲毕业院校
    MomGraduation: req.body.MomGraduation,//母亲毕业时间
    MomPhone: req.body.MomPhone,
    MomEmail: req.body.MomEmail,
    //父亲信息
    FatName: req.body.FatName,
    FatAddress: req.body.FatAddress,
    FatOrganazation: req.body.FatOrganazation,
    FatJob: req.body.FatJob,
    FatEducation:req.body.FatEducation,//母亲最高学历
    FatSchool:req.body.FatSchool,//母亲毕业院校
    FatGraduation: req.body.FatGraduation,//母亲毕业时间
    FatPhone: req.body.FatPhone,
    FatEmail: req.body.FatEmail,
    //申请年级
    year: req.body.year,
  });
  student.save();
  res.status(201).json({
    message: 'POST SEND SUCCESFFULY'
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
app.put('/students/:userAccount', (req, res, next)=>{
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
      dob: req.body.dob, // 生日
      currentAddress: req.body.currentAddress,
      permanentAddress: req.body.permanentAddress,
      gender: req.body.gender,
      ssn: req.body.ssn,
      passport: req.body.passport,//护照或绿卡号码
      visa: req.body.visa,
      appEmail: req.body.appEmail,//申请所用的邮箱账号
      appPsw:req.body.appPsw,//申请所用的邮箱密码
      citizen:req.body.citizen,//国籍
      //标化成绩类
      TOEFL:req.body.TOEFL,
      TOEFLR:req.body.TOEFLR,//托福阅读
      TOEFLL:req.body.TOEFLL,//托福听力
      TOEFLS:req.body.TOEFLS,//托福口语
      TOEFLW:req.body.TOEFLW,//托福写作
      GRE: req.body.GRE,
      GREV: req.body.GREV,//GRE Verbal部分成绩
      GREVP: req.body.GREVP,
      GREQ: req.body.GREQ,
      GREQP: req.body.GREQP,
      GREW: req.body.GREW,
      GREWP: req.body.GREWP,
      GMAT: req.body.GMAT,//GMAT 部分
      GMATV: req.body.GMATV,
      GMATVP: req.body.GMATVP,
      GMATQ: req.body.GMATQ,
      GMATQP: req.body.GMATQP,
      GMATW: req.body.GMATW,
      GMATWP: req.body.GMATWP,
      GMATR: req.body.GMATR,
      GMATRP: req.body.GMATRP,
      OtherStandardTest: req.body.OtherStandardTest,//其他类标化成绩
      //Skills & Hobbies
      Language:req.body.Language, 
      ComputerSkills: req.body.ComputerSkills,//计算机技能
      OtherSkills: req.body.OtherSkills,//其他技能或证书
      Hobbies: req.body.Hobbies,//爱好
      //Professional Interest专业兴趣
      Professional1: req.body.Professional1,
      Professional2: req.body.Professional2,
      Professional3: req.body.Professional3,
      //Career Plan职业规划
      CareerPlan1: req.body.CareerPlan1,
      CareerPlan2: req.body.CareerPlan2,
      //Personal Strength个人优势
      Strength1: req.body.Strength1,
      Strength2: req.body.Strength2,
      //母亲信息
      MomName: req.body.MomName,
      MomAddress: req.body.MomAddress,
      MomOrganazation: req.body.MomOrganazation,
      MomJob: req.body.MomJob,
      MomEducation:req.body.MomEducation,//母亲最高学历
      MomSchool:req.body.MomSchool,//母亲毕业院校
      MomGraduation: req.body.MomGraduation,//母亲毕业时间
      MomPhone: req.body.MomPhone,
      MomEmail: req.body.MomEmail,
      //父亲信息
      FatName: req.body.FatName,
      FatAddress: req.body.FatAddress,
      FatOrganazation: req.body.FatOrganazation,
      FatJob: req.body.FatJob,
      FatEducation:req.body.FatEducation,//母亲最高学历
      FatSchool:req.body.FatSchool,//母亲毕业院校
      FatGraduation: req.body.FatGraduation,//母亲毕业时间
      FatPhone: req.body.FatPhone,
      FatEmail: req.body.FatEmail,
      //申请年级
      year: req.body.year,
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

//school route----------------------------------------------------------------------------------------------------------------
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
    recommNumber:req.body.recommNumber,//所需要推荐信数量
    other:req.body.other,
    level:req.body.level,// 存放可能性（四种：正常，不可能，冲刺，保底）
    gre:req.body.gre,// 是否强制GRE（两种：强制，optional）
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

// display school detail by particular school id
app.get('/schooldetail/:id', (req,res,next) =>{
    School.findById(req.params.id).then(documents =>{
      console.log(documents);
       res.json({
         schools: documents
       });
    });
});

// display all school list by student id
app.get('/studentschooldetail/:studentId', (req,res,next) =>{
  const studentId = req.params.studentId;
  School.find({userAccount: studentId}).then(documents =>{
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
        recommNumber:req.body.recommNumber,//所需要推荐信数量
        other:req.body.other,
        level:req.body.level,// 存放可能性（四种：正常，不可能，冲刺，保底）
        gre:req.body.gre,// 是否强制GRE（两种：强制，optional）
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

//推荐人route------------------------------------------------------------------------------------------------------------------
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
      recommenders: documents
    });
  });
});

// display recommender detail by id
app.get('/recommenderdetail/:id', (req,res,next) =>{
    Recommender.findById(req.params.id).then(documents =>{
      console.log(documents);
       res.json({
        recommender: documents
       });
    });
});

// display all recommenders list by student id
app.get('/studentrecommenderdetail/:studentId', (req,res,next) =>{
  const studentId = req.params.studentId;
  Recommender.find({userAccount: studentId}).then(documents =>{
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

//推荐信route------------------------------------------------------------------------------------------------------------------
// manager add new recommend letter to school
app.post('/recomletteradd', (req,res,next) =>{
  const recomletter = new  Recomletter({
    schoolID:req.body.schoolID, //对应申请学校的id
    studentID:req.body.studentID,//对应学生的id
    recommender:req.body.recommender,//推荐人id
    recommenderName:req.body.recommenderName,//推荐人名字
    type:req.body.type,//推荐信为 acedemic / professional
    state: req.body.state,//推荐信状态（提交/未提交/弃用）
  });
  recomletter.save();
  res.status(201).json({
    message: 'POST SEND SUCCESFFULY'
  });
});

// display all recommender letters
app.get('/recomletters',(req, res, next) => {
    Recomletter.find().then(documents =>{
    res.json({
        recomletters: documents
    });
  });
});

// display recommend letter detail by id
app.get('/recomletterdetail/:id', (req,res,next) =>{
    Recomletter.findById(req.params.id).then(documents =>{
      console.log(documents);
       res.json({
        recomletter: documents
       });
    });
});

// display all recommender letter list by school id
app.get('/schoolrecomletterlist/:schoolId', (req,res,next) =>{
    const schoolId = req.params.schoolId;
    Recomletter.find({schoolID: schoolId}).then(documents =>{
      res.json({
        recomletters: documents
      });
    });
  });

//update recommende letter information by id
app.put('/recomletters/:id', (req, res, next)=>{
  const id= req.params.id;
    Recomletter.update({_id: id},{$set: 
    //updateOps
    {
        schoolID:req.body.schoolID, //对应申请学校的id
        studentID:req.body.studentID,//对应学生的id
        recommender:req.body.recommender,//推荐人id
        recommenderName:req.body.recommenderName,//推荐人名字
        type:req.body.type,//推荐信为 acedemic / professional
        state: req.body.state,//推荐信状态（提交/未提交/弃用）
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

// delete recommende letter by id//
app.delete('/recomletters/:id',(req, res, next) => {
    const id= req.params.id;
    Recomletter.remove({_id:id})
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

//学生教育背景------------------------------------------------------------------------------------------------------------------
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



//update education information by id
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

// delete education detail by id//
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

//工作经历------------------------------------------------------------------------------------------------------------------
//add new experiences to student
app.post('/experienceadd', (req,res,next) =>{
  const experience = new Experience({
    userAccount:req.body.userAccount,//存储学生ID
    type: req.body.type,//类型：教学科研/工作经历
    institution: req.body.institution,
    institutionLocation:req.body.institutionLocation,
    experienceStart:req.body.experienceStart,//经历起始日期
    experienceEnd:req.body.experienceEnd,//经历结束日期
    experienceposition: req.body.experienceposition,
    responsibilities:req.body.responsibilities,
    project:req.body.project,
    achievement:req.body.achievement,
  });
  experience.save();
  res.status(201).json({
    message: 'POST SEND SUCCESFFULY'
  });
});

// display all experiences 
app.get('/experiences',(req, res, next) => {
    Experience.find().then(documents =>{
    res.json({
        experiences: documents
    });
  });
});

// display experience detail by id
app.get('/experiencetail/:id', (req,res,next) =>{
    Experience.findById(req.params.id).then(documents =>{
      console.log(documents);
       res.json({
        experience: documents
       });
    });
});

// display experience detail by student id
app.get('/studentexperiencelist/:studentId', (req,res,next) =>{
    const studentId = req.params.studentId;
    Experience.find({userAccount: studentId}).then(documents =>{
      res.json({
        experiences: documents
      });
    });
  });



//update experience information by id
app.put('/experience/:id', (req, res, next)=>{
  const id= req.params.id;
  Experience.update({_id: id},{$set: 
    //updateOps
    {
        userAccount:req.body.userAccount,//存储学生ID
        type: req.body.type,//类型：教学科研/工作经历
        institution: req.body.institution,
        institutionLocation:req.body.institutionLocation,
        experienceStart:req.body.experienceStart,//经历起始日期
        experienceEnd:req.body.experienceEnd,//经历结束日期
        experienceposition: req.body.experienceposition,
        responsibilities:req.body.responsibilities,
        project:req.body.project,
        achievement:req.body.achievement,
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

// delete experience detail by id//
app.delete('/experience/:id',(req, res, next) => {
    const id= req.params.id;
    Experience.remove({_id:id})
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

//论文------------------------------------------------------------------------------------------------------------------
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

// delete publication detail by id//
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

//课外活动------------------------------------------------------------------------------------------------------------------
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
//奖项------------------------------------------------------------------------------------------------------------------
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



//update honor information by id
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

//Blog部分----------------------------------------------------------------------------------------------------------
//add new blog 
app.post('/blogadd', (req,res,next) =>{
  const blog = new Blog({
    blogTitle:req.body.blogTitle,//标题
    blogSubtitle: req.body.blogSubtitle,//副标题
    blogTime:req.body.blogTime,//发布日期
    blogPicture:req.body.blogPicture,//图片
    blogLink: req.body.blogLink,//link
    countNumber:String,//计数
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
        countNumber:req.body.countNumber,//计数
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

//通知部分----------------------------------------------------------------------------------------------------------
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

// display all notifs list by student id
app.get('/notifdetail/:studentId', (req,res,next) =>{
  const studentId = req.params.studentId;
  Notif.find({userAccount: studentId}).then(documents =>{
    res.json({
      notifs: documents
    });
  });
});

//update 通知 information by id
app.put('/notif/:id', (req, res, next)=>{
  const id= req.params.id;
  Notif.update({_id: id},{$set: 
    //updateOps
    {
      userAccount:req.body.userAccount,//学生的id
      content: req.body.content,//存储通知内容
      ndate:req.body.ndate,//通知日期
      nstate:req.body.nstate,//通知状态（"未读/已读"）
      ntype:req.body.ntype,//通知类型（"紧急/一般/比较紧急")
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

//进度部分----------------------------------------------------------------------------------------------------------
//add new task 
app.post('/taskadd', (req,res,next) =>{
  const task = new Task({
    userAccount:req.body.userAccount,//学生的id
    studentname:req.body.studentname,//学生名字
    assigned:req.body.assigned,// 被Assigned人信息
    content: req.body.content,//进度内容
    tdate:req.body.tdate,//进度日期
    tstate:req.body.tstate,//进度状态（"完成/未完成"）
    ttype:req.body.ttype,//进度类型（"紧急/一般/比较紧急"）
  });
  task.save();
  res.status(201).json({
    message: 'POST SEND SUCCESFFULY'
  });
});

// display all tasks 
app.get('/tasks',(req, res, next) => {
    Task.find().then(documents =>{
    res.json({
      tasks: documents
    });
  });
});

// display all tasks list by student id
app.get('/taskdetail/:studentId', (req,res,next) =>{
  const studentId = req.params.studentId;
  Task.find({userAccount: studentId}).then(documents =>{
    res.json({
      tasks: documents
    });
  });
});

// display all tasks list by assigned id
app.get('/taskdetail/:aid', (req,res,next) =>{
  const aId = req.params.aId;
  Task.find({assigned: aId}).then(documents =>{
    res.json({
      tasks: documents
    });
  });
});

//update task information by id
app.put('/task/:id', (req, res, next)=>{
  const id= req.params.id;
  Task.update({_id: id},{$set: 
    //updateOps
    {
      userAccount:req.body.userAccount,//学生的id
      studentname:req.body.studentname,//学生名字
      assigned:req.body.assigned,// 被Assigned人信息
      content: req.body.content,//进度内容
      tdate:req.body.tdate,//进度日期
      tstate:req.body.tstate,//进度状态（"完成/未完成"）
      ttype:req.body.ttype,//进度类型（"紧急/一般/比较紧急"）
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


//文书部分----------------------------------------------------------------------------------------------------------
//add new statement 
app.post('/statementadd', (req,res,next) =>{
  const statement = new Statement({
    schoolID:req.body.schoolID, //对应申请学校的id
    question: req.body.question,//题目内容
    stype:req.body.stype,//文书种类(PS/SOP/Essay)
    words:req.body.words,//字数
  });
  statement.save();
  res.status(201).json({
    message: 'POST SEND SUCCESFFULY'
  });
});

// display all statements 
app.get('/statements',(req, res, next) => {
    Statement.find().then(documents =>{
    res.json({
        statements: documents
    });
  });
});

// display all statements list by school id
app.get('/statementdetail/:schoolID', (req,res,next) =>{
    const schoolID = req.params.schoolID;
    Statement.find({schoolID: schoolID}).then(documents =>{
      res.json({
        statements: documents
      });
    });
  });

// delete statements detail by id//
app.delete('/statements/:id',(req, res, next) => {
  const id= req.params.id;
  Statement.remove({_id:id})
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
