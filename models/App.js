import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

//Определяем модель App

const App = sequelize.define(
  "App",
  {
    //Определяем столбцы модели

    // id

    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    // Имя пользователя (имя столбца)
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // вес приложения
    size: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // текущее время
    },
  },
  {
    tableName: "Apps",
    timestamps: false, // отключение автоматического включения полей createdAt и updatedAt
  }
);

export default App;
