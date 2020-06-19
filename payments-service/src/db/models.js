import { DataTypes, Model } from "sequelize";

import sequelize from "./connection";

export class Payment extends Model {}
Payment.init(
  {
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    }
  },
  { sequelize, modelName: "payments" }
);