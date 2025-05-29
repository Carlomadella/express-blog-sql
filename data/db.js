// importazione di mysql2
const mysql = require("mysql2");

// dichiaro la variabile per la connessione al db
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_blog"
});

// utilizzo la variabile creata precedentemente per instaurare la connessione
connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to MySQL!");
  }
});