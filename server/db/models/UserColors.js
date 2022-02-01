const { UUID, UUIDV4, INTEGER } = require('sequelize');
const db = require('../db');

// association table
const UserColors = db.define('userColors', {
  id: { type: UUID, defaultValue: UUIDV4, primaryKey: true },
  frequency: {
    type: INTEGER,
    defaultValue: 1,
  },
});

UserColors.createWithCheck = async (newRecord) => {
  try {
    const existingRecord = await UserColors.findOne({
      where: {
        userId: newRecord.userId,
        colorId: newRecord.colorId,
      },
    });

    if (existingRecord) {
      existingRecord.update({ frequency: existingRecord.frequency + 1 });
    } else {
      await UserColors.create(newRecord);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = UserColors;
