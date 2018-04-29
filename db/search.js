var db = require('./db_pool');

var Search = function(){};

Search.prototype.conditionSearch = function (keyword,callback) {
    var sql = 'SELECT * FROM recruitment.job_release WHERE  jname like ?;';

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql,[keyword],function(err, results) {
            if (err) {
                callback(err);
            }
            connection.release();
            callback(false,results);
        });

    });
};


module.exports = Search;