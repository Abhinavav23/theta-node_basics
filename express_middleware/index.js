const { app } = require("./app");
const dotEnv = require("dotenv");
dotEnv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`app started on ${port}`);
});
