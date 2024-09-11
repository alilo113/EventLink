const express = require('express');
const app = express()
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const User = require('./models/User');
const event = require("./models/event") 
const port = 3000
const cors = require("cors")
require('dotenv').config();

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/eventLinkUsers")
.then(() => console.log("Database connected"))
.catch((error) => console.log(error))

app.post("/sign-up", async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const userAlreadyExist = await User.findOne({ username });
        if (userAlreadyExist) {
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

app.post("/log-in", async (req, res) => {
    try {
        const {email, password} = req.body;
        
        const userExist = await User.findOne({email})
        if(!userExist){
            return res.status(401).json({message: "wrong email or password"})
        }

        const match = await bcrypt.compare(password, userExist.password);
        if (!match) {
            return res.status(401).json({ message: "Wrong email or password" });
        }
        
        const token = jwt.sign({ id: userExist._id }, process.env.JWT_SECRET, { expiresIn: "1h" })

        return res.status(200).json({
            username: userExist.username,
            userID: userExist._id.toString(),
            token
        });
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
})


app.post("/", async (req, res) => {
    try {
        const { title, location, date, description } = req.body;
        const newEvent = new event({title: title, location: location, date: date, description: description})
        await newEvent.save()
        res.status(201).json({message: "event created!!!"})
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
        console.log(error)
    }
})

app.listen(port, console.log(`this app listen to port ${port}`))