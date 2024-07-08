import express from "express";
import bodyParser from "body-parser";

const app= express();
const port =3000;
let formData = {};

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("form.ejs");
});

app.post("/home",(req,res)=>{
    formData = {
        name: req.body.name,
        regno: req.body.regno,
        age: req.body.age,
        location: req.body.location,
        dept: req.body.dept
    };
    res.render("home.ejs");
});

app.post("/form",(req,res)=>{
    console.log(formData);
    const row = req.body.row;
    const col = req.body.col;   
    res.render("table.ejs",{
        data : formData,
        rows : row,
        cols : col,
    });
});

app.get("/end",(req,res)=>{
    res.render("form.ejs");
});


app.listen(port, ()=>{
    console.log(`server running on ${port}`);
});