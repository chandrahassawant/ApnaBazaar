const { poolPromise, sql } = require("../config/db")

    const createUser= async(user)=>{
       const pool= await poolPromise;

        const result =await pool.request()
       .input("firstName",sql.VarChar,user.firstName)
       .input("lastName",sql.VarChar,user.lastName)
       .input("email",sql.VarChar,user.email)
       .input("password",sql.VarChar,user.password)
       .query(`
    INSERT INTO Users (firstName, lastName, email, password)
    OUTPUT INSERTED.id
    VALUES (@firstName, @lastName, @email, @password)
  `);

  return result;
    }
module.exports = {
  createUser,
};