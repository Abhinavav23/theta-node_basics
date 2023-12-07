const {Schema, model} = require("mongoose");

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: Number
})

const User = model("users", UserSchema);

module.exports = User

