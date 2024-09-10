const mongoose = require("mongoose")

const eventSchema = mongoose.Schema({
    event: {
        type: String,
        required: true,
    }
})

const event = mongoose.model("event", eventSchema)
module.exports = event