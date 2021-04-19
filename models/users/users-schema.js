const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    password: String,
    role: {type: String, enum: ["ADMIN", "FACULTY", "STUDENT"]}
}, {collection: "users"});

module.exports = usersSchema;