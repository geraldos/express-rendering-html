const express = require("express");
const app = express();

const PORT = process.env.PORT || 5004;
const path = require("path");

app.get("/", (req, res) => {
    res.send("Hello");
});

//Read External File
app.use(express.static("views"));

app.get("/products", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/products.html"));
});

app.listen(PORT, () => {
    console.log(`Servers runs on port ${PORT}`);
});
