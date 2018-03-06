var express = require('express');
var router = express.Router();
var User = require('../db/user')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/userInfo', function(req, res, next) {
    console.log(req.body.name);
    console.log(req.body.sex);
    console.log(req.body.age);
    console.log(req.body.city);
    console.log(req.body.major);
    console.log(req.body.degree);
    console.log(req.body.school);
    console.log(req.body.phone);
    console.log(req.body.email);
    console.log(req.session.id);
    var name = req.body.name;
    var sex = req.body.sex;
    var age = req.body.age;
    var city = req.body.city;
    var degree = req.body.degree;
    var major = req.body.major;
    var school = req.body.school;
    var phone = req.body.phone;
    var email = req.body.email;
    var id = req.session.user.id;
    console.log(name);
    console.log(sex);
    console.log(age);
    console.log(city);
    console.log(major);
    console.log(degree);
    console.log(school);
    console.log(phone);
    console.log(email);
    console.log(id);
    var user = new User();
    user.updateUserInfo(name,sex,age,city,degree,major,school,phone,email,id,function(err,result){
        if(err){
            console.log(err)
        }
        user.updateName(name,id,function (err,result) {
            if(err){
                console.log(err)
            }
        })
        res.send('true');
    });
});

router.get('/userInfo', function(req, res, next) {
    var id = req.session.user.id;
    var user = new User();
    user.selectInfo(id,function(err,result){
        if(err){
            console.log(err)
        }
        var imgData = new Buffer( result[0].img).toString();
        console.log(result)
        result[0].img = imgData
        console.log(result)
        res.send(result);
    });
});

router.post('/userImg', function(req, res, next) {
    var id = req.session.user.id;
    var img = req.body.img
    console.log(img)
    var user = new User();
    user.updateImg(img,id,function(err,result){
        if(err){
            console.log(err)
        }
        res.send('true');
    });
});

router.post('/userExpectUpdate', function(req, res, next) {
    console.log('12123132');
    var name = req.body.name;
    var city = req.body.city;
    var type = req.body.type;
    var salary = req.body.salary;
    var statement = req.body.statement;
    var id = req.session.user.id;
    console.log(name);
    console.log(type);
    console.log(city);
    console.log(salary);
    console.log(statement);
    console.log(id);
    var user = new User();
    user.updateUserExpect(name,type,city,salary,statement,id,function(err,result){
        if(err){
            console.log(err)
        }
        res.send('true');
    });
});

router.get('/userExpect', function(req, res, next) {
    var id = req.session.user.id;
    var user = new User();
    user.selectExpect(id,function(err,result){
        if(err){
            console.log(err)
        }
        // var arr = result[0].statement.split('\n')
        console.log(result)
        res.send(result);
    });
});

router.get('/getUserEducation', function(req, res, next) {
    var id = req.session.user.id;
    var user = new User();
    user.selectEducation(id,function(err,result){
        if(err){
            console.log(err)
        }
        // var arr = result[0].statement.split('\n')
        console.log(result)
        res.send(result);
    });
});

router.post('/deleteUserEducation', function(req, res, next) {
    var id = req.session.user.id;
    var keyid = req.body.keyid;
    var user = new User();
    user.deleteEducation(id,keyid,function(err,result){
        if(err){
            console.log(err)
        }
        // var arr = result[0].statement.split('\n')
        console.log(result)
        res.send(result);
    });
});

router.post('/insertUserEducation', function(req, res, next) {
    var id = req.session.user.id;
    var school = req.body.school;
    var degree = req.body.degree;
    var major = req.body.major;
    var start = req.body.start;
    var end = req.body.end;
    var user = new User();
    user.insertEducation(id,school,degree,major,start,end,function(err,result){
        if(err){
            console.log(err)
        }
        // var arr = result[0].statement.split('\n')
        console.log(result)
        res.send(result);
    });
});

module.exports = router;
