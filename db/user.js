var db = require('./db_pool');

var User = function () {};

User.prototype.insertUserInfo = function (id,name,callback) {
    var sql = "insert into recruitment.user_info (id,name,img,sex,age,city,degree,major,school,phone,email) values (?,?,null,null,null,null,null,null,null,null,null);";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [id,name], function(err, results) {
            if (err) {
                callback('false');
            } else {
                callback('true');
            }
        });
        connection.release();
    });
};

User.prototype.insertUserExpect = function (id,callback) {
    var sql = 'insert into recruitment.user_expect (id,name,type,city,salary,statement) values (?,null,null,null,null,null);'

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [id], function(err, results) {
            if (err) {
                callback('false');
            } else {
                callback('true');
            }
        });
        connection.release();
    });
};

User.prototype.updateName = function (name,id,callback) {
    var sql = "UPDATE recruitment.userlogin SET name=? WHERE id=?;";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [name,id], function(err, results) {
            if (err) {
                callback('false');
            } else {
                callback('true');
            }
        });
        connection.release();
    });
};

User.prototype.selectInfo = function (id,callback) {
    var sql = "SELECT * FROM recruitment.user_info WHERE id =?";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [id], function(err, results) {
            if (err) {
                callback('false');
            } else {
                callback(false, results);
            }
        });
        connection.release();
    });
};

User.prototype.updateImg = function (img,id,callback) {
    var sql = "UPDATE recruitment.user_info SET img=? WHERE id=?;";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [img,id], function(err, results) {
            if (err) {
                callback('false');
            } else {
                callback('true');
            }
        });
        connection.release();
    });
};

User.prototype.updateUserInfo = function (name,sex,age,city,degree,major,school,phone,email,id,callback) {
    var sql = 'UPDATE recruitment.user_info SET name=?, sex=?, age=?,city=?,degree=?,major=?,school=?,phone=?,email=? WHERE id=?;';

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [name,sex,age,city,degree,major,school,phone,email,id], function(err, results) {
            if (err) {
                callback('false');
            } else {
                callback('true');
            }
        });
        connection.release();
    });
};

User.prototype.updateUserExpect = function (name,type,city,salary,statement,id,callback) {
    var sql = 'UPDATE recruitment.user_expect SET name=?, type=?, city=?,salary=?,statement=? WHERE id=?;';

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [name,type,city,salary,statement,id], function(err, results) {
            if (err) {
                callback('false');
            } else {
                callback('true');
            }
        });

        connection.release();
    });
};

User.prototype.selectExpect = function (id,callback) {
    var sql = "SELECT * FROM recruitment.user_expect WHERE id =?";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [id], function(err, results) {
            if (err) {
                callback('false');
            } else {
                callback(false, results);
            }
        });
        connection.release();
    });
};

User.prototype.selectEducation = function (id,callback) {
    var sql = "SELECT * FROM recruitment.user_education WHERE id =?";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [id], function(err, results) {
            if (err) {
                callback('false');
            } else {
                callback(false, results);
            }
        });
        connection.release();
    });
};

User.prototype.insertEducation = function (id,school,degree,major,start,end,callback) {
    var sql = 'insert into recruitment.user_education (id,keyid,school,degree,major,start,end) values (?,null,?,?,?,?,?);'

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [id,school,degree,major,start,end], function(err, results) {
            if (err) {
                callback('false');
            } else {
                callback(false, results);
            }
        });
        connection.release();
    });
};

User.prototype.deleteEducation = function (id,keyid,callback) {
    var sql = 'delete from recruitment.user_education where id=? and keyid=?;'

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [id,keyid], function(err, results) {
            if (err) {
                callback('false');
            } else {
                callback(false, results);
            }
        });
        connection.release();
    });
};


module.exports = User;