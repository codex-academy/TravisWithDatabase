# Travis with a database

[![Build Status](https://travis-ci.org/avermeulen/TravisWithDatabase.svg)](https://travis-ci.org/avermeulen/TravisWithDatabase)

How to use travis with a MySQL database and Node JS.

Go the the [travis website(http://docs.travis-ci.com/user/database-setup/#MySQL) for background information.

Be sure to make your applications database user and password configurable via environment variables. In this example I use `MYSQL_USER` and `MYSQL_PWD`
