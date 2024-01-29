import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("development", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export const connectToDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
