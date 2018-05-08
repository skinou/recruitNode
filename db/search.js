var db = require('./db_pool');

var Search = function(){};

Search.prototype.conditionSearch = function (keyword,callback) {
    var sql = 'SELECT * FROM recruitment.job_release inner join (SELECT * FROM recruitment.company_info) as newtable where job_release.cid = newtable.cid and jobTag like ? ORDER BY jtime DESC';

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql,[keyword,keyword],function(err, results) {
            if (err) {
                callback(err);
            }
            connection.release();
            callback(false,results);
        });

    });
};


Search.prototype.conditionSearchCompsny = function (keyword,callback) {
    var sql = 'SELECT * FROM recruitment.company_info WHERE cname like ? or field like ? or city like ? ORDER BY jtime DESC;';

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql,[keyword,keyword,keyword],function(err, results) {
            if (err) {
                callback(err);
            }
            connection.release();
            callback(false,results);
        });
    });
};


module.exports = Search;