require("dotenv").config({ path: "./.env" });

const app = require("./app");
const { poolPromise } = require("./config/db");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});