import express from "express";
import sequelize from "./config/db.js";

const app = express();
const port = process.env.PORT || 3333;

app.get("/", (req, res) => {
  res.send("My 7 Home work!");
});

app.listen(port, async () => {
  try {
    await sequelize.authenticate(); //Проверка подключения к БД
    console.log("Connection to the database has been established successfully");
    console.log(`Server running on port http://localhost:${port}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
