var express = require('express');
var router = express.Router();
var Company = require('../db/company');
var Job = require('../db/job');



// ------------------------------------公司信息----------------------------------------------

router.get('/getCompany', function(req, res, next) {
    // 获取公司基本信息
    var company = new Company();
    var cid = req.query.cid;

    company.selectCompanyInfo( cid,function(err,result){
        if(err){
            console.log(err)
        }
        console.log(result);
        res.send(result)
    });
});



router.get('/getCompanyProduct', function(req, res, next) {
    //获取公司产品
    var company = new Company();
    var cid = req.query.cid;

    company.selectCompanyProduct(cid,function(err,result) {
        if (err) {
            console.log(err)
        }
        res.send(result);
    });

});

router.get('/selectCompanyIntro', function(req, res, next) {
    //插入公司介绍
    var cid = req.query.cid;
    var company = new Company();

    company.selectCompanyIntro(cid,function(err,result) {
        if (err) {
            console.log(err)
        }
        console.log(result);
        res.send(result);
    });

});



router.get('/selectCompanyTags', function(req, res, next) {
    //提取公司标签
    var cid = req.query.cid;
    var company = new Company();

    company.selectCompanyTags(cid,function(err,result) {
        if (err) {
            console.log(err)
        }
        console.log(result);
        res.send(result);
    });

});



router.get('/selectJobForCompany', function(req, res, next) {
    var cid = req.query.cid;
    var job = new Job();

    job.selectJobForCompany( cid,function(err,result){
        if(err){
            console.log(err)
        }

        console.log(result);
        res.send(result)
    });
});



router.get('/selectCompanyManager', function(req, res, next) {
    //提取团队信息
    var cid = req.query.cid;
    var company = new Company();

    company.selectCompanyManager(cid,function(err,result) {
        if (err) {
            console.log(err)
        }
        console.log(result);
        res.send(result);
    });

});

module.exports = router;
