const genericMiddleware = (req, res, next) => {
  console.log("running generic code");
  // ---
  // ---
  // ---
  next();
}

const checkLoginStatus = (req, res, next) => {
  console.log("checking loggedIn state");

  if (req.headers.token) {
    next();
  } else {
    res.json({ error: "not a valid req" });
  }
};

module.exports = { checkLoginStatus, genericMiddleware };
