var assert = require('assert');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : process.env.MYSQL_USER,
  password :  process.env.MYSQL_PWD,
  database : 'travis_db'
});

describe("Test mocha from Travis", function(){

  connection.connect();

  it("should pass", function(done){

    connection.query('select count(*) as userCount from users', function(err, users) {

        console.log(err);

        assert.equal(0, users[0].userCount);
        done();
    });


  });

});
