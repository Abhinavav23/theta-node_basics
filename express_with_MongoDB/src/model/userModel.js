const mongoose = require("mongoose");
const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    mobileNo: Number
}, {versionKey: false})

const User = mongoose.model("users", UserSchema)

module.exports = User
// CRUD operations
// Schema --> structure for documents
// model --> created using collection name and schema and allows us to perform opearations