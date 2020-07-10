const express = require("express");
const app = express();

const PORT = process.env.PORT || 5004;
const path = require("path");

//Read External File
app.use(express.static("views"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/index.html"));
});

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/home.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/about.html"));
});

app.listen(PORT, () => {
    console.log(`Servers runs on port ${PORT}`);
});
