const app = require("./app");
const dotENV = require("dotenv");
dotENV.config();
require("../connectDB");

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`express server running at ${PORT}`);
});
