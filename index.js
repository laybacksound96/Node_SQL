require("dotenv").config();
const { faker } = require("@faker-js/faker");
const mysql = require("mysql");
const connection = mysql.createConnection({
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
});

const query = "SELECT COUNT(*) AS total FROM users";
connection.query(query, (error, results, fields) => {
  if (error) {
    console.error("쿼리 실행 실패: ", error);
    return;
  }
  console.log("쿼리 실행 결과: ", results[0].total);
});
