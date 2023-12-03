const express = require("express");
const router = express();

router.get("/contact-ar", (req, res) => {
    res.sendFile(__dirname + "/contact-ar.html");
});
router.get("/order-ar", (req, res) => {
    res.sendFile(__dirname + "/order-ar.html");
});
router.get("/ordernow-ar", (req, res) => {
    res.sendFile(__dirname + "/ordernow-ar.html");
});
router.get("/pizza-ar", (req, res) => {
    res.sendFile(__dirname + "/pizza-ar.html");
});
router.get("/story-ar", (req, res) => {
    res.sendFile(__dirname + "/story-ar.html");
});

module.exports = router;