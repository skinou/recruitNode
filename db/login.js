var db = require('./db_pool')

var Login = function () {}


// ------------------------------------------用户注册/登陆---------------------------------------------------



Login.prototype.selectAccount = function (account,callback) {
    var sql = "SELECT * FROM recruitment.userlogin WHERE account =?";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [account], function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            callback(false, results);
        });
        connection.release();
    });

}

Login.prototype.selectId = function (id,callback) {
    var sql = "SELECT * FROM recruitment.userlogin WHERE id =?";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [id], function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            // console.log(results)
            callback(false, results);
        });
        connection.release();
    });
}


Login.prototype.userReg = function (id,name,account,password,callback) {
    var sql = "insert into recruitment.userlogin (id,name,account,password) values (?,?,?,?);";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [id,name,account,password], function(err, results) {
            if (err) {
                callback('false');
            } else {
                callback('true');
            }
        });
        connection.release();
    });
};


// ------------------------------------------公司注册/登陆---------------------------------------------------




Login.prototype.selectCompanyAccount = function (account,callback) {
    var sql = "SELECT * FROM recruitment.company_login WHERE account=?;";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [account], function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            console.log(results)
            callback(false, results);
        });
        connection.release();
    });

};


Login.prototype.companyReg = function (cname,account,password,callback) {
    var sql = "insert into recruitment.company_login (cname,account,password) values (?,?,?);";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [cname,account,password], function(err, results) {
            if (err) {
                callback('false');
            } else {
                callback('true');
            }
        });
        connection.release();
    });
};



module.exports = Login;