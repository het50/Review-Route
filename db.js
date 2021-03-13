const mysql=require("mysql");
const pool=mysql.createPool({
user:"root",
password:"",
host:"localhost",
database: "reviewroute"
});
module.exports=pool;
