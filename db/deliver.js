var db = require('./db_pool');

var Deliver = function(){};

// ------------------------------------------获取简历列表 ------------------------------------------------


Deliver.prototype.getJobDeliverList = function (id,state,callback) {
    var sql = 'select * from recruitment.job_resume inner join recruitment.job_release where job_resume.jkey = job_release.jkey and id = ? and state = ?;';

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql,[id,state],function(err, results) {
            if (err) {
                callback(err);
            }
            connection.release();
            callback(false,results);
        });

    });
};

module.exports = Deliver;
