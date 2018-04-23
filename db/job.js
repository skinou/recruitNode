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


// ------------------------------------------修改 公司 特定 岗位信息------------------------------------------------


Job.prototype.updateJobDetail = function (obj,jkey,callback) {
    var sql = 'update recruitment.job_release set jname= ? , salary= ?, city= ? , direction= ? ,experience= ? ,degree= ? ,jtype= ? ,jobTag= ? where jkey = ?;';

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [obj.jname,obj.salary,obj.city,obj.direction,obj.experience,obj.degree,obj.jtype,obj.jobTag,jkey], function(err, results) {
            if (err) {
                callback(err);
            }
            connection.release();
            callback("true");
        });

    });
};


// ------------------------------------------修改公司 岗位诱惑 ------------------------------------------------


Job.prototype.updateJobTemptation = function (temptation,jkey,callback) {
    var sql = 'update recruitment.job_release set temptation= ? where jkey = ?;';

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [temptation,jkey], function(err, results) {
            if (err) {
                callback(err);
            }
            connection.release();
            callback("true");
        });

    });
};

// ------------------------------------------修改公司 岗位职责 ------------------------------------------------


Job.prototype.updateJobDuty = function (duty,jkey,callback) {
    var sql = 'update recruitment.job_release set duty= ? where jkey = ?;';

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [duty,jkey], function(err, results) {
            if (err) {
                callback(err);
            }
            connection.release();
            callback("true");
        });

    });
};


// ------------------------------------------修改公司 岗位能力 ------------------------------------------------


Job.prototype.updateJobAbility = function (ability,jkey,callback) {
    var sql = 'update recruitment.job_release set ability= ? where jkey = ?;';

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [ability,jkey], function(err, results) {
            if (err) {
                callback(err);
            }
            connection.release();
            callback("true");
        });

    });
};

// ------------------------------------------修改公司 岗位技能 ------------------------------------------------


Job.prototype.updateJobSkill = function (skill,jkey,callback) {
    var sql = 'update recruitment.job_release set skill= ? where jkey = ?;';

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [skill,jkey], function(err, results) {
            if (err) {
                callback(err);
            }
            connection.release();
            callback("true");
        });

    });
};


// ------------------------------------------修改公司 岗位工作地址 ------------------------------------------------


Job.prototype.updateJobAddress = function (address,jkey,callback) {
    var sql = 'update recruitment.job_release set address= ? where jkey = ?;';

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [address,jkey], function(err, results) {
            if (err) {
                callback(err);
            }
            connection.release();
            callback("true");
        });

    });
};






// ------------------------------------------选取公司 特定 岗位信息（ 用户页面 ）------------------------------------------------


Job.prototype.selectJobDetailForUser = function (jkey,callback) {
    var sql = 'SELECT * FROM recruitment.job_release inner join recruitment.company_info where job_release.cid = company_info.cid and jkey = ?;';

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