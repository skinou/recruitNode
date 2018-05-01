var db = require('./db_pool');

var JobResume = function(){};


// ------------------------------------------获取简历列表 ------------------------------------------------


JobResume.prototype.getJobResumeList = function (jkey,callback) {
    var sql = 'select * from recruitment.job_resume inner join recruitment.user_info where job_resume.id = user_info.id and jkey = ?;';

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql,[jkey],function(err, results) {
            if (err) {
                callback(err);
            }
            connection.release();
            callback(false,results);
        });

    });
};




JobResume.prototype.getJobResume = function (rkey,callback) {
    var sql = 'SELECT * FROM recruitment.job_resume where rkey = ?;';

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql,[rkey],function(err, results) {
            if (err) {
                callback(err);
            }
            connection.release();
            callback(false,results);
        });

    });
};



// ------------------------------------------更新简历状态 ------------------------------------------------


JobResume.prototype.updateJobResumeState = function (state,rkey,callback) {
    var sql = 'update recruitment.job_resume set state = ? where rkey = ?; ;';

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql,[state,rkey],function(err, results) {
            if (err) {
                callback(err);
            }
            connection.release();
            callback('true');
        });

    });
};




// ------------------------------------------插入简历 ------------------------------------------------


JobResume.prototype.insertResume = function (id,cid,jkey,state,rtime,callback) {
    var sql = 'insert into recruitment.job_resume(rkey,id,cid,jkey,state,rtime) values (null,?,?,?,?,?);';

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql,[id,cid,jkey,state,rtime],function(err, results) {
            if (err) {
                callback(err);
            }
            connection.release();
            callback('true');
        });

    });
};



// ------------------------------------------查询是否投简历 ------------------------------------------------


JobResume.prototype.isPost = function (id,jkey,callback) {
    var sql = 'SELECT * FROM recruitment.job_resume where id = ? and jkey = ?;';

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


// ------------------------------------------简历数量+1 ------------------------------------------------


JobResume.prototype.resumePlus = function (jkey,callback) {
    var sql = 'update  recruitment.job_release set num=num+1 where jkey = ？';

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql,[jkey],function(err, results) {
            if (err) {
                callback(err);
            }
            connection.release();
            callback('true');
        });

    });
};

module.exports = JobResume;