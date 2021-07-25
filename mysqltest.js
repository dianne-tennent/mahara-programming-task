#!/usr/bin/env node

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '115.189.129.229',
  user     : 'me',
  password : 'secret',
  connectTimeout: 50000
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();