import dotenv from "dotenv";

import mongoose from "mongoose";

dotenv.config();
const USERDB = process.env.USERDB;
const DBPASSWORD = process.env.DBPASSWORD;
const DATABASE = process.env.DATABASE;
mongoose.connect(
  `mongodb+srv://${USERDB}:${DBPASSWORD}@portfolio.dum58.mongodb.net/${DATABASE}`
);
let db = mongoose.connection;

export default db;
