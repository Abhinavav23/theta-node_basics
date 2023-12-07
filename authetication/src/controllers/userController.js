const User = require("../models/userModel");

const signup = async(req, res) => {
    try{
        await User.create(req.body);
        res.json({msg: "success"})
    }catch(err){
        console.log("err", err);
        res.json({err})
    }
};

const login = () => {};

module.exports = { signup, login };

// fetch("http://localhost:5500/product/", {
//     method: "POST",
//     body: JSON.stringify({
//         "name": "airdopes",
//         "price" : 4000,
//         "quantity" : 10,
//         "category" : "electronic",
//         "brand" : "Samsung",
//         "description": "premium airdopes with features"
//     })
// })
// .then((res) => {
    
// })