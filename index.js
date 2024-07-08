import express from "express";
import bodyParser from "body-parser";

const app= express();
const port =3000;
let name, regno , age, dept, location , rows , cols;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("form.ejs");
});

app.post("/home",(req,res)=>{
    name = req.body.name;
    regno = req.body.regno;
    age= req.body.age;
    location = req.body.location;
    dept = req.body.dept;
    const formdata = req.body;
    res.render("home.ejs");

});

app.post("/form",(req,res)=>{
    res.render("table.ejs");
});

app.get("/end",(req,res)=>{
    res.render("form.ejs");
});


app.listen(port, ()=>{
    console.log(`server running on ${port}`);
});