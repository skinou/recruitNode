var express = require('express');
var router = express.Router();
var Job = require('../db/job');

// ------------------------------------发布岗位信息----------------------------------------------

router.post('/insertJobRelease', function(req, res, next) {
    // 获取公司基本信息
    var job = new Job();
    var obj = req.body.obj;
    obj.jobTag = obj.jobTag.toString();
    // var cname = req.session.user.name;
    console.log(obj);
    job.insertJobRelease( req.session.user.id,obj,function(err,result){
        if(err){
            console.log(err)
        }

        console.log(result);
        res.send(result)
    });
});


// ------------------------------------获取岗位信息----------------------------------------------

router.get('/selectJobForCompany', function(req, res, next) {
    // 获取公司基本信息
    var job = new Job();

    job.selectJobForCompany( req.session.user.id,function(err,result){
        if(err){
            console.log(err)
        }

        console.log(result);
        res.send(result)
    });
});



// ------------------------------------获取 指定 岗位信息----------------------------------------------

router.post('/selectJobDetail', function(req, res, next) {

    var jkey = req.body.jkey;
    console.log(jkey);

    var job = new Job();

    job.selectJobDetail( jkey,function(err,result){
        if(err){
            console.log(err)
        }

        console.log(result);
        res.send(result)
    });
});


// ------------------------------------更新 岗位 基本 信息----------------------------------------------

router.post('/updateJobDetail', function(req, res, next) {
    // 获取公司基本信息

    var jkey = req.body.jkey;
    var obj = req.body.obj;

    console.log(obj);
    console.log(jkey);

    var job = new Job();

    job.updateJobDetail(obj,jkey,function(err,result){
        if(err){
            console.log(err)
        }
        res.send(result)
    });
});



// ------------------------------------更新 岗位 岗位诱惑----------------------------------------------

router.post('/updateJobTemptation', function(req, res, next) {
    // 获取公司基本信息

    var jkey = req.body.jkey;
    var temptation = req.body.temptation;
    var jtime = req.body.jtime;

    console.log(temptation);
    console.log(jkey);

    var job = new Job();

    job.updateJobTemptation(temptation,jtime,jkey,function(err,result){
        if(err){
            console.log(err)
        }
        res.send('true')
    });
});


// ------------------------------------更新 岗位 岗位职责----------------------------------------------

router.post('/updateJobDuty', function(req, res, next) {
    // 获取公司基本信息

    var jkey = req.body.jkey;
    var duty = req.body.duty;
    var jtime = req.body.jtime;
    console.log(duty);
    console.log(jkey);

    var job = new Job();

    job.updateJobDuty(duty,jtime,jkey,function(err,result){
        if(err){
            console.log(err)
        }
        res.send(result)
    });
});



// ------------------------------------更新 岗位 岗位能力----------------------------------------------

router.post('/updateJobAbility', function(req, res, next) {
    // 获取公司基本信息

    var jkey = req.body.jkey;
    var ability = req.body.ability;
    var jtime = req.body.jtime;
    console.log(ability);
    console.log(jkey);

    var job = new Job();

    job.updateJobDuty(ability,jtime,jkey,function(err,result){
        if(err){
            console.log(err)
        }
        res.send(result)
    });
});


// ------------------------------------更新 岗位 岗位技能----------------------------------------------

router.post('/updateJobSkill', function(req, res, next) {
    // 获取公司基本信息

    var jkey = req.body.jkey;
    var skill = req.body.skill;
    var jtime = req.body.jtime;
    console.log(skill);
    console.log(jkey);

    var job = new Job();

    job.updateJobSkill(skill,jtime,jkey,function(err,result){
        if(err){
            console.log(err)
        }
        res.send(result)
    });
});


// ------------------------------------更新 岗位 岗位工作地址----------------------------------------------

router.post('/updateJobAddress', function(req, res, next) {
    // 获取公司基本信息

    var jkey = req.body.jkey;
    var address = req.body.address;
    var jtime = req.body.jtime;
    console.log(address);
    console.log(jkey);

    var job = new Job();

    job.updateJobAddress(address,jtime,jkey,function(err,result){
        if(err){
            console.log(err)
        }
        res.send(result)
    });
});




// ------------------------------------------选取公司 特定 岗位信息（ 用户页面 ）------------------------------------------------



router.get('/selectJobDetailForUser', function(req, res, next) {
    var jkey = req.query.jkey;
    var job = new Job();

    job.selectJobDetailForUser(jkey,function(err,result){
        if(err){
            console.log(err)
        }
        // var arr = result[0].statement.split('\n')
        console.log(result);
        res.send(result);
    });
});



// ------------------------------------------选取公司 特定 岗位信息（ 用户页面 ）------------------------------------------------

router.get('/selectJobDetailForUser', function(req, res, next) {
    var jkey = req.query.jkey;
    var job = new Job();

    job.selectJobDetailForUser(jkey,function(err,result){
        if(err){
            console.log(err)
        }
        // var arr = result[0].statement.split('\n')
        console.log(result);
        res.send(result);
    });
});


// ------------------------------------------选取所有岗位信息-----------------------------------------------

router.get('/getAllJob', function(req, res, next) {

    var job = new Job();

    job.getAllJob(function(err,result){
        if(err){
            console.log(err)
        }

        console.log(result);
        res.send(result);
    });
});



module.exports = router;