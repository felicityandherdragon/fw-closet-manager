const { UUID, UUIDV4, STRING } = require('sequelize');
const db = require('../db');

const Colors = db.define('color', {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  colorName: {
    type: STRING,
  },
  colorValue: {
    type: STRING,
  },
});

Colors.checkIfExists = async (color) => {
  try {
    const colorExists = await Colors.findOne({
      where: {
        colorName: color.colorName,
      },
    });
    if (colorExists) {
      return colorExists.id;
    } else {
      const newColor = await Colors.create(color);
      return newColor.id;
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = Colors;
