const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "diet",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      diet: {
        type: DataTypes.ENUM({
          defaultValue: "Other",
          values: [
            "Gluten Free",
            "Ketogenic",
            "Vegetarian",
            "Lacto Vegetarian",
            "Ovo Vegetarian",
            "Vegan",
            "Pescetarian",
            "Paleo",
            "Primal",
            "Low FODMAP",
            "Whole30",
          ],
        }),
      },
    },
    { timestamps: false }
  );
};
