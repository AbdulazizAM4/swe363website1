const express = require("express");
const app = express();
const router = require('./router');
app.use("/finish.html",function (req,res,next){
    console.log("It has been processed")
    next();
})
app.use(router)
app.use(express.static(__dirname));

app.get("/finish", (req, res) => {
    res.sendFile(__dirname + "/finish.html");
});
app.get("/contact-ar", (req, res) => {
    res.sendFile(__dirname + "/contact-ar.html");
});
app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/contact.html");
});
app.get("/game", (req, res) => {
    res.sendFile(__dirname + "/game.html");
});
app.get("/order", (req, res) => {
    res.sendFile(__dirname + "/order.html");
});
app.get("/ordernow", (req, res) => {
    res.sendFile(__dirname + "/ordernow.html");
});
app.get("/pizza", (req, res) => {
    res.sendFile(__dirname + "/pizza.html");
});
app.get("/quote", (req, res) => {
    res.sendFile(__dirname + "/quote.html");
});
app.get("/screensave", (req, res) => {
    res.sendFile(__dirname + "/screensave.html");
});
app.get("/story", (req, res) => {
    res.sendFile(__dirname + "/story.html");
});

app.listen(5000, () => {
    console.log("Application started and Listening on port 5000");
});