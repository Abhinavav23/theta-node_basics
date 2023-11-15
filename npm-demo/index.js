const add = (no1, no2) => {
  return no1 + no2;
};

const substract = (no1, no2) => {
  return no1 - no2;
};

const division = (no1, no2) => {
  return Math.floor(no1 / no2);
};

module.exports = {
  add,
  substract,
  division,
};

// steps to login
// ---> npm login
// username: YOUR_USERNAME
// password: PASSWORD
// Email: YOUR_EMAIL
// Otp: OTP

// logged in

// after login
// npm publish

// Versioning
// tells about what changes are expected in a specific version
// Major changes -> functionality updated, new functionality added, older ones deleted etc
// Minor Change --> functionality updates, little tweaks in existing ones
// patch change --> issue resolution, bug fixing, very few changes

// initial --> 1.0.0
// Major update --> 2.0.0
// Minor update-1 --> 2.1.0
// Minor update-2--> 2.2.0
// patch update --> 2.2.1
