const { faker } = require("@faker-js/faker");
var mysql = require("mysql");
require("dotenv").config();

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "join_us",
});

connection.connect(function (error) {
  if (error) {
    console.error("MySQL 서버 연결 실패: ", error);
    return;
  }
  console.log("Connected to MySQL");

  const query = "SELECT 1+3 as ss";
  connection.query(query, function (error, results, fields) {
    if (error) {
      console.error("쿼리 실행 실패: ", error);
      return;
    }
    console.log("쿼리 실행 결과: ", results);
  });
});
