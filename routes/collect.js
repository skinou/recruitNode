var express = require('express');
var router = express.Router();
var Collect = require('../db/collect');


router.get('/getCollectList', function(req, res, next) {
    //提取团队信息

    var id = req.session.user.id;
    console.log(id);
    var collect = new Collect();

    collect.getCollectList(id,function(err,result) {
        if (err) {
            console.log(err)
        }
        console.log(result);
        res.send(result);
    });

});


router.post('/insertCollectList', function(req, res, next) {
    //提取团队信息

    var id = req.session.user.id;
    var jkey = req.body.jkey;
    console.log(id);
    var collect = new Collect();

    collect.insertCollectList(id,jkey,function(err,result) {
        if (err) {
            console.log(err)
        }
        // console.log(result);
        res.send('true');
    });

});



router.post('/deleteCollectList', function(req, res, next) {
    //提取团队信息

    var id = req.session.user.id;
    var jkey = req.body.jkey;
    console.log(id);
    console.log(jkey);
    var collect = new Collect();

    collect.deleteCollectList(id,jkey,function(err,result) {
        if (err) {
            console.log(err)
        }
        // console.log(result);
        res.send('true');
    });
});

router.get('/isCollect', function(req, res, next) {
    var id = req.session.user.id;
    var jkey = req.query.jkey;
    console.log(id);
    console.log(jkey);
    var collect = new Collect();

    collect.isCollect(id,jkey,function(err,result) {
        if (err) {
            console.log(err)
        }
        // console.log(result);
        res.send(result);
    });
});



module.exports = router;