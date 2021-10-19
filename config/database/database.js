import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const db = new Sequelize(process.env.DB_SCEM, process.env.DB_USER, process.env.DB_PASS, {
	dialect: process.env.DB_DIALECT,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	logging : false,
	pool: {
	    max: 5,
	    min: 2,
	    idle: 20000,
	    acquire: 200000
  	}
});

export {
	db
}