var db = require('./db_pool');

var Collect = function(){};

// ------------------------------------------获取简历列表 ------------------------------------------------


Collect.prototype.getCollectList = function (id,callback) {
    var sql = 'select * from recruitment.collect inner join recruitment.job_release on collect.jkey = job_release.jkey and id = ? inner join recruitment.company_info on company_info.cid = job_release.cid ;';

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql,[id],function(err, results) {
            if (err) {
                callback(err);
            }
            connection.release();
            callback(false,results);
        });

    });
};


Collect.prototype.insertCollectList = function (id,jkey,callback) {
    var sql = 'insert into recruitment.collect (id,jkey) values(?,?);';

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql,[id,jkey],function(err, results) {
            if (err) {
                callback(err);
            }
            connection.release();
            callback('true');
        });

    });
};


Collect.prototype.deleteCollectList = function (id,jkey,callback) {
    var sql = 'delete from recruitment.collect where id = ? and jkey = ?;';

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql,[id,jkey],function(err, results) {
            if (err) {
                callback(err);
            }
            connection.release();
            callback('true');
        });

    });
};


Collect.prototype.isCollect = function (id,jkey,callback) {
    var sql = 'select * from recruitment.collect where id = ? and jkey = ?;';

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql,[id,jkey],function(err, results) {
            if (err) {
                callback(err);
            }
            connection.release();
            callback(false,results);
        });

    });
};



module.exports = Collect;