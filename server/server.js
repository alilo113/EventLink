const express = require('express');
const app = express()
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User'); // Adjust the path to your model file
const port = 3000
const cors = require("cors")

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/eventLinkUsers")
.then(() => console.log("Database connected"))
.catch((error) => console.log(error))

app.post("/sign-up", async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const userExist = await User.findOne({ username });
        if (userExist) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        console.log(newUser)
        await newUser.save();
        res.status(201).json({ message: "User created!" });
    } catch (error) {
        console.log("Error Creating user: ", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(port, console.log(`this app listen to port ${port}`))