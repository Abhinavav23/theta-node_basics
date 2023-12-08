const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "please enter at least three characters"],
    maxLength: 10,
  },
  lastName: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 10,
  },
  email: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 25,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    // validate: {
    //   validator: function (value) {
    //     console.log("value", value);
    //      return true means validation success and vice versa
    //     return /\d{3}-\d{3}-\d{4}/.test(value);
    //   },
    //   message: (props) =>
    //     `${props.value} is not a valid password please try another`,
    // },
  },
  mobile: {
    type: String,
    minLength: 10,
  },
  role: {
    type: String,
    enum: ["student", "instructor", "admin"]
  }
});

const User = model("users", UserSchema);

module.exports = User;
