*/Connect your own database and create tables android , frontend and backend and talk with the specified coloumns /*

import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "",
  password: "",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/",(req,res)=>{
    res.render("home.ejs")
})
app.get("/talks",(req,res)=>{
  res.render("talk.ejs")
})

app.post("/android", async (req, res) => {
  const firstname = req.body["firstname"];
  const lastname = req.body["lastname"];
  const email = req.body["email"];
  const phone = req.body["phone"];
  const linkdin = req.body["linkdin"]; 
  const github = req.body["github"];
  const message = req.body["message"];

  try {
      await db.query(
          "INSERT INTO android (firstname, lastname, email, phone, linkdin, github, msg) VALUES ($1, $2, $3, $4, $5, $6, $7)",
          [firstname, lastname, email, phone, linkdin, github, message]
      );
      res.render("home.ejs", { alert: "Your application has been submitted." });
  } catch (err) {
      console.log(err);
      res.render("home.ejs", {alert: "There was an error submitting your application. Please try again later." });
  }
});
app.post("/frontend", async (req, res) => {
  const firstname = req.body["firstname"];
  const lastname = req.body["lastname"];
  const email = req.body["email"];
  const phone = req.body["phone"];
  const linkdin = req.body["linkdin"]; 
  const github = req.body["github"];
  const message = req.body["message"];

  try {
      await db.query(
          "INSERT INTO frontend (firstname, lastname, email, phone, linkdin, github, msg) VALUES ($1, $2, $3, $4, $5, $6, $7)",
          [firstname, lastname, email, phone, linkdin, github, message]
      );
      res.render("home.ejs", { alert: "Your application has been submitted." });
  } catch (err) {
      console.log(err);
      res.render("home.ejs", {alert: "There was an error submitting your application. Please try again later." });
  }
});
app.post("/backend", async (req, res) => {
  const firstname = req.body["firstname"];
  const lastname = req.body["lastname"];
  const email = req.body["email"];
  const phone = req.body["phone"];
  const linkdin = req.body["linkdin"]; 
  const github = req.body["github"];
  const message = req.body["message"];

  try {
      await db.query(
          "INSERT INTO backend (firstname, lastname, email, phone, linkdin, github, msg) VALUES ($1, $2, $3, $4, $5, $6, $7)",
          [firstname, lastname, email, phone, linkdin, github, message]
      );
      res.render("home.ejs", { alert: "Your application has been submitted." });
  } catch (err) {
      console.log(err);
      res.render("home.ejs", {alert: "There was an error submitting your application. Please try again later." });
  }
});
app.post("/talk",async(req,res)=>{
  const name=req.body["name"];
  const email = req.body["email"];
  const phone = req.body["phone"];
  const message = req.body["message"];
  try {
    await db.query(
      "INSERT INTO talk (name,phone,email,msg) VALUES($1,$2,$3,$4)",
      [name,phone,email,message]
    );
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.render("talk.ejs",{prompt:"Error in submitting try later"})
  }

})



app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
  
