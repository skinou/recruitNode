var express = require('express');
var router = express.Router();
var Deliver = require('../db/deliver');


router.get('/getJobDeliverList', function(req, res, next) {

    var id = req.session.user.id;
    var state = req.query.state;
    console.log(id);
    var deliver = new Deliver();

    deliver.getJobDeliverList(id,state,function(err,result) {
        if (err) {
            console.log(err)
        }
        console.log(result);
        res.send(result);
    });

});

module.exports = router;