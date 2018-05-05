var express = require('express');
var router = express.Router();
var Search = require('../db/search');

// ------------------------------------------模糊搜索 ------------------------------------------------


router.post('/search', function(req, res, next) {
    var keyword = req.body.keyword;
    var newkey = "%"+keyword+"%";
    var search = new Search();

    console.log(keyword);
    console.log(newkey);

    search.conditionSearch(newkey,function(err,result) {
        if (err) {
            console.log(err)
        }
        console.log(result);
        res.send(result);
    });

});


router.post('/searchCompany', function(req, res, next) {
    var keyword = req.body.keyword;
    var newkey = "%"+keyword+"%";
    var search = new Search();

    console.log(keyword);
    console.log(newkey);

    search.conditionSearchCompsny(newkey,function(err,result) {
        if (err) {
            console.log(err)
        }
        console.log(result);
        res.send(result);
    });

});

module.exports = router;