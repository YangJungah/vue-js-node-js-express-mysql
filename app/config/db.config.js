module.exports = {
  HOST: process.env.AZURE_MYSQL_HOST,
  USER: process.env.AZURE_MYSQL_USERNAME,
  PASSWORD: process.env.AZURE_MYSQL_PASSWORD,
  DB: process.env.AZURE_MYSQL_DBNAME,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
