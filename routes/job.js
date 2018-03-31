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
    // 获取公司基本信息

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


module.exports = router;