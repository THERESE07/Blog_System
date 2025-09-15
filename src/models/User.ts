import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

//Step 1a: Define attributes for User
interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
}

//Step 1b: Define creation attributes (id is optional when creating)
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

// Step 1c: Define User model class
class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;

  //timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

//Step 1d: Initialize Sequelize model

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, //our db connection
    tableName: "users",
    timestamps: true,
  }
);

export default User;
