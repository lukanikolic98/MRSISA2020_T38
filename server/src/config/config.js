module.exports = {
    port: process.env.PORT || 8081,
    db: {
      HOST: "localhost",
      USER: "lukanikolic98",
      PASSWORD: "123456",
      DBNAME: "mrsisaclinic",
      dialect: "mysql",
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    }
  };