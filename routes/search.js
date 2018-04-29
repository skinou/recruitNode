var express = require('express');
var router = express.Router();
var Search = require('../db/search');

// ------------------------------------------模糊搜索 ------------------------------------------------


router.post('/search', function(req, res, next) {
    //提取团队信息

    var keyword = req.body.keyword;
    var newkey = "%"+keyword+"%";
    var search = new Search();

    search.conditionSearch(newkey,function(err,result) {
        if (err) {
            console.log(err)
        }
        res.send(result);
    });

});
