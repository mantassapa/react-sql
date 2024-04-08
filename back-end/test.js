const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const port = 3003;
 
app.use(cors());
 
app.use(express.urlencoded({ extended: true }));
 
app.use(express.json());
 
const connectionToDB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "kab212_0_react_zoo",
});
 
//POST
app.post("/zoo", (req, res) => {
  const sqlQuery = `INSERT INTO zoo_muzeum(name, type, weight, live_in_zoo) VALUES(?, ?, ?, ?)`;
 
  connectionToDB.query(
    sqlQuery,
    [req.body.name, req.body.type, req.body.weight, req.body.live_in_zoo],
    function (err, result) {
      if (err) throw err;
      res.json({ message: "ok" });
    }
  );
});
 
app.listen(port, () => {
  console.log(`listening port ${port}`);
});