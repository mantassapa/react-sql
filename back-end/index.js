const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")
const port = 3003

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const connectionToDb = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "kab212_07_react_zoo"
})

//POST
app.post("/zoo",(req, res)=>{
    const sqlQuery=`INSERT INTO zoo_museum(name,type,weight,lives) VALUES(?,?,?,?)`;

    connectionToDb.query(sqlQuery, [req.body.name, req.body.type, req.body.weight, req.body.lives], function(err, result)
    {
        if(err) throw err;
        res.json({message: "ok"})
    })
})

//GET
app.get("/zoo", (req,res)=>{
    const sqlQuery=`SELECT id, name, type, weight, lives FROM zoo_museum`;
    
    connectionToDb.query(sqlQuery, function(err, result){
        if(err) throw err;
        res.json(result)
    })
})

//DELETE
app.delete("/zoo/:id", (req, res)=>{
    const sqlQuery=`DELETE FROM zoo_museum WHERE id=?`;

    connectionToDb.query(sqlQuery, [res.params.id], function(err, result){
        if(err) throw err;
        res.json({message: 'deleted'})
    })
})
//UPDATE
app.put("/zoo/:id", (req, res)=>{
    const sqlQuery=`UPDATE zoo_museum SET name=?, type=?, weight=?, lives=? WHERE id=?`;

    connectionToDb.query(sqlQuery, [req.body.name, req.body.type, req.body.weight, req.body.lives, req.params.id], function(err, result){
        if(err) throw err;
        res.json({message: 'updated'})
    })
})

app.listen(port, ()=>{
    console.log(`listening port ${port}`);
})