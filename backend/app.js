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


//??????hotelM?????????get??????  ??? hm.service.ts get???????????????
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

//hotel manager ??????order??????????????????json????????????????????????
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

//??????hotelM?????????get??????  ??? hm.service.ts get???????????????
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
    dob: req.body.dob, // ??????
    currentAddress: req.body.currentAddress,
    permanentAddress: req.body.permanentAddress,
    gender: req.body.gender,
    ssn: req.body.ssn,
    passport: req.body.passport,//?????????????????????
    visa: req.body.visa,
    appEmail: req.body.appEmail,//???????????????????????????
    appPsw:req.body.appPsw,//???????????????????????????
    citizen:req.body.citizen,//??????
    //???????????????
    TOEFL:req.body.TOEFL,
    TOEFLR:req.body.TOEFLR,//????????????
    TOEFLL:req.body.TOEFLL,//????????????
    TOEFLS:req.body.TOEFLS,//????????????
    TOEFLW:req.body.TOEFLW,//????????????
    GRE: req.body.GRE,
    GREV: req.body.GREV,//GRE Verbal????????????
    GREVP: req.body.GREVP,
    GREQ: req.body.GREQ,
    GREQP: req.body.GREQP,
    GREW: req.body.GREW,
    GREWP: req.body.GREWP,
    GMAT: req.body.GMAT,//GMAT ??????
    GMATV: req.body.GMATV,
    GMATVP: req.body.GMATVP,
    GMATQ: req.body.GMATQ,
    GMATQP: req.body.GMATQP,
    GMATW: req.body.GMATW,
    GMATWP: req.body.GMATWP,
    GMATR: req.body.GMATR,
    GMATRP: req.body.GMATRP,
    OtherStandardTest: req.body.OtherStandardTest,//?????????????????????
    //Skills & Hobbies
    Language:req.body.Language, 
    ComputerSkills: req.body.ComputerSkills,//???????????????
    OtherSkills: req.body.OtherSkills,//?????????????????????
    Hobbies: req.body.Hobbies,//??????
    //Professional Interest????????????
    Professional1: req.body.Professional1,
    Professional2: req.body.Professional2,
    Professional3: req.body.Professional3,
    //Career Plan????????????
    CareerPlan1: req.body.CareerPlan1,
    CareerPlan2: req.body.CareerPlan2,
    //Personal Strength????????????
    Strength1: req.body.Strength1,
    Strength2: req.body.Strength2,
    //????????????
    MomName: req.body.MomName,
    MomAddress: req.body.MomAddress,
    MomOrganazation: req.body.MomOrganazation,
    MomJob: req.body.MomJob,
    MomEducation:req.body.MomEducation,//??????????????????
    MomSchool:req.body.MomSchool,//??????????????????
    MomGraduation: req.body.MomGraduation,//??????????????????
    MomPhone: req.body.MomPhone,
    MomEmail: req.body.MomEmail,
    //????????????
    FatName: req.body.FatName,
    FatAddress: req.body.FatAddress,
    FatOrganazation: req.body.FatOrganazation,
    FatJob: req.body.FatJob,
    FatEducation:req.body.FatEducation,//??????????????????
    FatSchool:req.body.FatSchool,//??????????????????
    FatGraduation: req.body.FatGraduation,//??????????????????
    FatPhone: req.body.FatPhone,
    FatEmail: req.body.FatEmail,
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
      dob: req.body.dob, // ??????
      currentAddress: req.body.currentAddress,
      permanentAddress: req.body.permanentAddress,
      gender: req.body.gender,
      ssn: req.body.ssn,
      passport: req.body.passport,//?????????????????????
      visa: req.body.visa,
      appEmail: req.body.appEmail,//???????????????????????????
      appPsw:req.body.appPsw,//???????????????????????????
      citizen:req.body.citizen,//??????
      //???????????????
      TOEFL:req.body.TOEFL,
      TOEFLR:req.body.TOEFLR,//????????????
      TOEFLL:req.body.TOEFLL,//????????????
      TOEFLS:req.body.TOEFLS,//????????????
      TOEFLW:req.body.TOEFLW,//????????????
      GRE: req.body.GRE,
      GREV: req.body.GREV,//GRE Verbal????????????
      GREVP: req.body.GREVP,
      GREQ: req.body.GREQ,
      GREQP: req.body.GREQP,
      GREW: req.body.GREW,
      GREWP: req.body.GREWP,
      GMAT: req.body.GMAT,//GMAT ??????
      GMATV: req.body.GMATV,
      GMATVP: req.body.GMATVP,
      GMATQ: req.body.GMATQ,
      GMATQP: req.body.GMATQP,
      GMATW: req.body.GMATW,
      GMATWP: req.body.GMATWP,
      GMATR: req.body.GMATR,
      GMATRP: req.body.GMATRP,
      OtherStandardTest: req.body.OtherStandardTest,//?????????????????????
      //Skills & Hobbies
      Language:req.body.Language, 
      ComputerSkills: req.body.ComputerSkills,//???????????????
      OtherSkills: req.body.OtherSkills,//?????????????????????
      Hobbies: req.body.Hobbies,//??????
      //Professional Interest????????????
      Professional1: req.body.Professional1,
      Professional2: req.body.Professional2,
      Professional3: req.body.Professional3,
      //Career Plan????????????
      CareerPlan1: req.body.CareerPlan1,
      CareerPlan2: req.body.CareerPlan2,
      //Personal Strength????????????
      Strength1: req.body.Strength1,
      Strength2: req.body.Strength2,
      //????????????
      MomName: req.body.MomName,
      MomAddress: req.body.MomAddress,
      MomOrganazation: req.body.MomOrganazation,
      MomJob: req.body.MomJob,
      MomEducation:req.body.MomEducation,//??????????????????
      MomSchool:req.body.MomSchool,//??????????????????
      MomGraduation: req.body.MomGraduation,//??????????????????
      MomPhone: req.body.MomPhone,
      MomEmail: req.body.MomEmail,
      //????????????
      FatName: req.body.FatName,
      FatAddress: req.body.FatAddress,
      FatOrganazation: req.body.FatOrganazation,
      FatJob: req.body.FatJob,
      FatEducation:req.body.FatEducation,//??????????????????
      FatSchool:req.body.FatSchool,//??????????????????
      FatGraduation: req.body.FatGraduation,//??????????????????
      FatPhone: req.body.FatPhone,
      FatEmail: req.body.FatEmail,
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
    state: req.body.state, //????????????????????????????????????????????????offer??????????????????
    univName: req.body.univName,//????????????
    schoolName: req.body.schoolName,//????????????
    majorName: req.body.majorName,//????????????
    ddl1: req.body.ddl1,//DDL 1
    ddl2: req.body.ddl2,//DDL 2
    ddl3: req.body.ddl3,//DDL 3
    interview: req.body.interview,//?????? ???????????????-????????????????????????
    videoEssay: req.body.videoEssay, // videoEssay(????????????????????????????????????????????????)
    link: req.body.link, //??????
    applyAccount:req.body.applyAccount,//????????????
    applyPassword:req.body.applyPassword,//???????????????
    recommNumber:req.body.recommNumber,//????????????????????????
    other:req.body.other,
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
        state: req.body.state, //????????????????????????????????????????????????offer??????????????????
        univName: req.body.univName,//????????????
        schoolName: req.body.schoolName,//????????????
        majorName: req.body.majorName,//????????????
        ddl1: req.body.ddl1,//DDL 1
        ddl2: req.body.ddl2,//DDL 2
        ddl3: req.body.ddl3,//DDL 3
        interview: req.body.interview,//?????? ???????????????-????????????????????????
        videoEssay: req.body.videoEssay, // videoEssay(????????????????????????????????????????????????)
        link: req.body.link, //??????
        applyAccount:req.body.applyAccount,//????????????
        applyPassword:req.body.applyPassword,//???????????????
        recommNumber:req.body.recommNumber,//????????????????????????
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

//?????????route------------------------------------------------------------------------------------------------------------------
  // manager add new recommender to student
app.post('/recommenderadd', (req,res,next) =>{
  const recommender = new  Recommender({
    userAccount:req.body.userAccount, //???????????????id
    firstName: req.body.firstName,//???????????????
    lastName: req.body.lastName,
    email: req.body.email,//?????????email
    phone: req.body.phone,//
    title: req.body.title, // ???????????????
    location: req.body.location,//??????
    gender: req.body.gender,//??????
    education:req.body.education, //??????
    organization:req.body.organization, //????????????
    duration:req.body.duration,//??????????????????????????????
    position:req.body.position, //??????
    relation:req.body.relation,//??????????????????
    other:req.body.other,//????????????
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
        userAccount:req.body.userAccount, //???????????????id
        firstName: req.body.firstName,//???????????????
        lastName: req.body.lastName,
        email: req.body.email,//?????????email
        phone: req.body.phone,//
        title: req.body.title, // ???????????????
        location: req.body.location,//??????
        gender: req.body.gender,//??????
        education:req.body.education, //??????
        organization:req.body.organization, //????????????
        duration:req.body.duration,//??????????????????????????????
        position:req.body.position, //??????
        relation:req.body.relation,//??????????????????
        other:req.body.other,//????????????
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

//?????????route------------------------------------------------------------------------------------------------------------------
// manager add new recommend letter to school
app.post('/recomletteradd', (req,res,next) =>{
  const recomletter = new  Recomletter({
    schoolID:req.body.schoolID, //?????????????????????id
    studentID:req.body.studentID,//???????????????id
    recommender:req.body.recommender,//?????????id
    recommenderName:req.body.recommenderName,//???????????????
    type:req.body.type,//???????????? acedemic / professional
    state: req.body.state,//????????????????????????/?????????/?????????
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
        schoolID:req.body.schoolID, //?????????????????????id
        studentID:req.body.studentID,//???????????????id
        recommender:req.body.recommender,//?????????id
        recommenderName:req.body.recommenderName,//???????????????
        type:req.body.type,//???????????? acedemic / professional
        state: req.body.state,//????????????????????????/?????????/?????????
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

//??????????????????------------------------------------------------------------------------------------------------------------------
//add new educations to student
app.post('/educationadd', (req,res,next) =>{
  const education = new Education({
    userAccount:req.body.userAccount,//????????????ID
    type: req.body.type,//????????????????????????????????????
    educationName: req.body.educationName,
    educationLocation:req.body.educationLocation,
    educationStart:req.body.educationStart,//??????????????????
    educationEnd:req.body.educationEnd,//??????????????????
    major: req.body.major,
    Degree:req.body.Degree,
    GPA:req.body.GPA,
    MajorGPA:req.body.MajorGPA,//??????GPA
    SecondDegree:req.body.SecondDegree,//?????????
    SecondGPA:req.body.SecondGPA,//???????????? GPA
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
        userAccount:req.body.userAccount,//????????????ID
        type: req.body.type,//????????????????????????????????????
        educationName: req.body.educationName,
        educationLocation:req.body.educationLocation,
        educationStart:req.body.educationStart,//??????????????????
        educationEnd:req.body.educationEnd,//??????????????????
        major: req.body.major,
        Degree:req.body.Degree,
        GPA:req.body.GPA,
        MajorGPA:req.body.MajorGPA,//??????GPA
        SecondDegree:req.body.SecondDegree,//?????????
        SecondGPA:req.body.SecondGPA,//???????????? GPA
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

//????????????------------------------------------------------------------------------------------------------------------------
//add new experiences to student
app.post('/experienceadd', (req,res,next) =>{
  const experience = new Experience({
    userAccount:req.body.userAccount,//????????????ID
    type: req.body.type,//?????????????????????/????????????
    institution: req.body.institution,
    institutionLocation:req.body.institutionLocation,
    experienceStart:req.body.experienceStart,//??????????????????
    experienceEnd:req.body.experienceEnd,//??????????????????
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
        userAccount:req.body.userAccount,//????????????ID
        type: req.body.type,//?????????????????????/????????????
        institution: req.body.institution,
        institutionLocation:req.body.institutionLocation,
        experienceStart:req.body.experienceStart,//??????????????????
        experienceEnd:req.body.experienceEnd,//??????????????????
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

//??????------------------------------------------------------------------------------------------------------------------
//add new publication to student
app.post('/publicationadd', (req,res,next) =>{
  const publication = new Publication({
    userAccount:req.body.userAccount,//????????????ID
    PublicationTitle: req.body.PublicationTitle,
    PublicationJournal: req.body.PublicationJournal,//??????
    PublicationDate: req.body.PublicationDate,//??????
    PublicationLink: req.body.PublicationLink,//??????
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
        userAccount:req.body.userAccount,//????????????ID
        PublicationTitle: req.body.PublicationTitle,
        PublicationJournal: req.body.PublicationJournal,//??????
        PublicationDate: req.body.PublicationDate,//??????
        PublicationLink: req.body.PublicationLink,//??????
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

//????????????------------------------------------------------------------------------------------------------------------------
//add new activitys to student
app.post('/activityadd', (req,res,next) =>{
  const activity = new Activity({
    userAccount:req.body.userAccount,//????????????ID
    activityOrganization: req.body.activityOrganization,
    activityStart:req.body.activityStart,//????????????
    activityEnd:req.body.activityEnd,//????????????
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
        userAccount:req.body.userAccount,//????????????ID
        activityOrganization: req.body.activityOrganization,
        activityOrganization: req.body.activityOrganization,
        activityStart:req.body.activityStart,//????????????
        activityEnd:req.body.activityEnd,//????????????
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
//??????------------------------------------------------------------------------------------------------------------------
//add new honors to student
app.post('/honoradd', (req,res,next) =>{
  const honor = new Honor({
    userAccount:req.body.userAccount,//????????????ID
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
        userAccount:req.body.userAccount,//????????????ID
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

//Blog??????----------------------------------------------------------------------------------------------------------
//add new blog 
app.post('/blogadd', (req,res,next) =>{
  const blog = new Blog({
    blogTitle:req.body.blogTitle,//??????
    blogSubtitle: req.body.blogSubtitle,//?????????
    blogTime:req.body.blogTime,//????????????
    blogPicture:req.body.blogPicture,//??????
    blogLink: req.body.blogLink,//link
    countNumber:String,//??????
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
        blogTitle:req.body.blogTitle,//??????
        blogSubtitle: req.body.blogSubtitle,//?????????
        blogTime:req.body.blogTime,//????????????
        blogPicture:req.body.blogPicture,//??????
        blogLink: req.body.blogLink,//link
        countNumber:req.body.countNumber,//??????
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

//????????????----------------------------------------------------------------------------------------------------------
//add new notif 
app.post('/notifadd', (req,res,next) =>{
  const notif = new Notif({
    userAccount:req.body.userAccount,//?????????id
    content: req.body.content,//??????????????????
    ndate:req.body.ndate,//????????????
    nstate:req.body.nstate,//???????????????"??????/??????"???
    ntype:req.body.ntype,//???????????????"??????/??????/????????????")
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

//update ?????? information by id
app.put('/notif/:id', (req, res, next)=>{
  const id= req.params.id;
  Notif.update({_id: id},{$set: 
    //updateOps
    {
      userAccount:req.body.userAccount,//?????????id
      content: req.body.content,//??????????????????
      ndate:req.body.ndate,//????????????
      nstate:req.body.nstate,//???????????????"??????/??????"???
      ntype:req.body.ntype,//???????????????"??????/??????/????????????")
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


//????????????----------------------------------------------------------------------------------------------------------
//add new statement 
app.post('/statementadd', (req,res,next) =>{
  const statement = new Statement({
    schoolID:req.body.schoolID, //?????????????????????id
    question: req.body.question,//????????????
    stype:req.body.stype,//????????????(PS/SOP/Essay)
    words:req.body.words,//??????
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
