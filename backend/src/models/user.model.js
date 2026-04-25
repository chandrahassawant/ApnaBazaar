const { poolPromise, sql } = require("../config/db");

const createUser = async (user) => {
  const pool = await poolPromise;

  const result = await pool
    .request()
    .input("firstName", sql.VarChar, user.firstName)
    .input("lastName", sql.VarChar, user.lastName)
    .input("email", sql.VarChar, user.email)
    .input("phone", sql.VarChar, user.phone)
    .input("password", sql.VarChar, user.password).query(`
    INSERT INTO Users (firstName, lastName, email, phone, password)
    OUTPUT INSERTED.id
    VALUES (@firstName, @lastName, @email, @phone, @password)
  `);

  return result;
};

const getAllUsers = async () => {
  const pool = await poolPromise;
  const result = await pool.request().query(`
        SELECT * FROM Users
      `);
  return result.recordset;
};

module.exports = {
  createUser,
  getAllUsers,
};
