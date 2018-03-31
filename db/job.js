var db = require('./db_pool');

var Job = function(){};

// ------------------------------------------插入岗位信息------------------------------------------------

Job.prototype.insertJobRelease = function (cid,obj,callback) {
    var sql = 'insert into recruitment.job_release (jkey,cid,jname,salary,city,direction,experience,degree,jtype,jobTag,temptation,duty,skill,ability,address,jtime) values (null,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);';

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [cid,obj.jname,obj.salary,obj.city,obj.direction,obj.experience,obj.degree,obj.jtype,obj.jobTag,obj.temptation,obj.duty,obj.skill,obj.ability,obj.address,obj.jtime], function(err, results) {
            if (err) {
                callback('false');
            }
            connection.release();
            callback('true');

        });

    });
};



// ------------------------------------------选取公司岗位信息------------------------------------------------


Job.prototype.selectJobForCompany = function (cid,callback) {
    var sql = 'select * from recruitment.job_release where cid = ?;';

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [cid], function(err, results) {
            if (err) {
                callback('false');
            }
            connection.release();
            callback(false, results);


        });

    });
};



// ------------------------------------------选取公司 特定 岗位信息------------------------------------------------


Job.prototype.selectJobDetail = function (jkey,callback) {
    var sql = 'select * from recruitment.job_release where jkey = ?;';

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [jkey], function(err, results) {
            if (err) {
                callback('false');
            }
            connection.release();
            callback(false, results);


        });

    });
};






module.exports = Job;