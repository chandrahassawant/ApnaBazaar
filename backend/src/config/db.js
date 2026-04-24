const sql = require("mssql");

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_PORT),
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

// ✅ Create shared connection
const poolPromise = new sql.ConnectionPool(dbConfig)
  .connect()
  .then((pool) => {
    console.log("✅ MSSQL Connected Successfully!");
    return pool;
  })
  .catch((err) => {
    console.error("❌ MSSQL Connection Failed:", err.message);
    throw err;
  });

module.exports = {
  sql,
  poolPromise,
};