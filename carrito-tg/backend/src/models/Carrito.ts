import sequelize from "../config/db";
import { DataTypes } from "sequelize";

const Carrito = sequelize.define(
  "carrito",
  {
    idcarrito: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idproducto: {
      type: DataTypes.INTEGER,
    },
    nombreProducto: {
      type: DataTypes.STRING,
    },
    cantidad: {
      type: DataTypes.INTEGER,
    },
    precioProducto: {
      type: DataTypes.FLOAT,
    },
    isvProducto: {
      type: DataTypes.FLOAT,
    },
    subtotal: {
      type: DataTypes.FLOAT,
    },
    ordenCompra: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "carrito",
    timestamps: false,
  },
);

export default Carrito;
