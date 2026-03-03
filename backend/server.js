import "dotenv/config";
import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createPool } from "mysql2";
// import { connection } from "../connectDB.js";

const connect = mysql.createPool({
    
  host: "localhost",
  user: "root",
  database: "avoska",
  password: "NwEr9dw4@?"
});
//  connection.connect(function(err){
//     if (err) {
//       return console.error("Ошибка: " + err.message);
//     }
//     else{
//       console.log("Подключение к серверу MySQL успешно установлено");
//     }

// })


const app = express();
app.use(cors(), express.json());

app.post("/reg", async (req, res) => {
  try {
    const { id_role, login, password, full_name, phone, email } = req.body;
    const hash = await bcrypt.hash(password, 10)
    await connect.query(
      "INSERT INTO user(id_role,login,password,full_name,phone,email) VALUES(?,?,?,?,?,?)",
      [id_role, login, hash, full_name, phone, email],
    );
    res.status(201).json({Message:'Успех'});
  } catch (error) {
    res.status(500).json({Message:'Jibedf'});
  }
});
app.listen(5000);
