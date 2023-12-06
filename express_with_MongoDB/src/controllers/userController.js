const User = require("../model/userModel");

const createUser = (req, res) => {
  console.log("body", req.body);
  //  database creation
  //  save into DB
  // respond to req accordingly
  const { firstName, lastName, email, mobile, password } = req.body;

  // const user = new User({
  //   firstName: "first",
  //   lastName: "last",
  //   mobileNo: 12345,
  //   password: "1234",
  //   email: "myemail"
  // })

  // user.save()
  User.create({
    firstName,
    lastName,
    email,
    password,
    mobileNo: mobile,
  })
    .then((data) => {
      console.log("data", data);
      res.json({ msg: "created" });
    })
    .catch((err) => {
      console.log("err", err);
      res.json({ msg: "error occured" });
    });
};

const login = (req, res) => {
  console.log("data", req.body);
  const { email, password } = req.body;
  // check if the user is a valid user --> find it in DB
  // return all the values from collection when nothing passes

  // return values that matches email value
  // User.find({email})
  // .then((data) => {
  //   console.log("data", data);
  //   res.json({msg: "found"})
  // })
  // .catch((err) => {
  //   console.log("err", err);
  //   res.json({ msg: "error occured" });
  // })

  User.findOne({ email })
    .then((data) => {
      console.log("data", data);
      if (data) {
        if(data.password === password){
          res.json({ message: "login successful" });
        }else{
          res.json({ error: "wrong password" });
        }
      } else {
        res.json({ error: "user not found" });
      }

      // if data is present
      // --> check for password --> if password is correct ---> respond with success
      // otherwise we can respond wrong password

      // otherwise --> return response saying no user found
    })
    .catch((err) => {
      // console.log("err", err);
      res.json({ msg: "error occured" });
    });
};

module.exports = { createUser, login };
