var express = require('express');
var router = express.Router();
var JobResume = require('../db/job_resume');
var User = require('../db/user');


// ------------------------------------------获取简历列表 ------------------------------------------------


router.post('/getJobResumeList', function(req, res, next) {
    //提取团队信息

    var jkey = req.body.jkey;
    var jobResume = new JobResume();

    jobResume.getJobResumeList(jkey,function(err,result) {
        if (err) {
            console.log(err)
        }
        // console.log(result);
        res.send(result);
    });

});


router.get('/getJobResume', function(req, res, next) {
    //提取团队信息

    var rkey = req.query.rkey;
    console.log(rkey);
    var jobResume = new JobResume();

    jobResume.getJobResume(rkey,function(err,result) {
        if (err) {
            console.log(err)
        }
        // console.log(result);
        res.send(result);
    });

});



// ------------------------------------------获取简历详细信息 ------------------------------------------------


router.get('/userInfo', function(req, res, next) {
    var id = req.query.id;
    var user = new User();

    console.log(id);

    user.selectInfo(id,function(err,result){
        if(err){
            console.log(err)
        }
        res.send(result);
    });
});


router.get('/userExpect', function(req, res, next) {
    var id = req.query.id;
    var user = new User();

    user.selectExpect(id,function(err,result){
        if(err){
            console.log(err)
        }
        // var arr = result[0].statement.split('\n')
        console.log(result);
        res.send(result);
    });
});








router.get('/getUserEducation', function(req, res, next) {
    var id = req.query.id;
    var user = new User();

    user.selectEducation(id,function(err,result){
        if(err){
            console.log(err)
        }
        // var arr = result[0].statement.split('\n')
        console.log(result);
        res.send(result);
    });
});


router.get('/getUserWork', function(req, res, next) {
    var id = req.query.id;
    var user = new User();

    user.selectWork(id,function(err,result){
        if(err){
            console.log(err)
        }
        // var arr = result[0].statement.split('\n')
        console.log(result);
        res.send(result);
    });
});


router.get('/getUserPro', function(req, res, next) {
    var id = req.query.id;
    var user = new User();
    user.selectPro(id,function(err,result){
        if(err){
            console.log(err)
        }
        // var arr = result[0].statement.split('\n')
        console.log(result);
        res.send(result);
    });
});


router.get('/getUserDes', function(req, res, next) {
    var id = req.query.id;
    var user = new User();

    user.selectDes(id,function(err,result){
        if(err){
            console.log(err)
        }
        // var arr = result[0].statement.split('\n')
        // console.log(arr)
        res.send(result);
    });
});

router.get('/getUserSkill', function(req, res, next) {
    var id = req.query.id;
    var user = new User();

    user.selectSkill(id,function(err,result){
        if(err){
            console.log(err)
        }
        // var arr = result[0].statement.split('\n')
        console.log(result);
        res.send(result);
    });
});




// ------------------------------------------更新简历状态 ------------------------------------------------


router.post('/updateJobResumeState', function(req, res, next) {
    var state = req.body.state;
    var rkey = req.body.rkey;
    var jobResume = new JobResume();


    jobResume.updateJobResumeState(state,rkey,function(err,result){
        if(err){
            console.log(err)
        }
        res.send('true');
    });
});





module.exports = router;