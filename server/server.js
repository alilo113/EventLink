const express = require("express");
const app = express();
const port = 3000;

app.get("/api", (req, res) => {
    res.json("hello world")
})

app.listen(port, console.log(`this app listen to port ${port}`))