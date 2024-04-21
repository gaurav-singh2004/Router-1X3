const express = require("express");
const hbs = require("hbs");
const path = require("path");

const app = express();
const weatherData = require("../utils/weatherData");
  
const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicPath));
 

app.get("/",(req,res) => {
    res.render("index", {title: "Weather App"});
})

app.get("/weather",(req,res) => {
    if(!req.query.address){
        return res.send("Please provide an address")
    }
    weatherData(req.query.address, (error, result) => {
        if(error){
            return res.send(error);
        }
        res.send(result); 
    });
});

app.get("*", (req,res) => {
    res.render("404", { title : "404:Page not found"});
})


app.listen(80, () => {
    console.log("Server is running on port 80");
})