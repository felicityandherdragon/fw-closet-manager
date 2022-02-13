const { UUID, UUIDV4, STRING, BOOLEAN } = require('sequelize');
const db = require('../db');

const User = db.define('user', {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  email: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  profilePic: {
    type: STRING,
    allowNull: false,
    defaultValue: 'https://closet-manager-s3-bucket.s3.us-east-2.amazonaws.com/profile-placeholder.png'
  },
  currentSession: {
    type: STRING,
    allowNull: true,
  },
  isAdmin: {
    type: BOOLEAN,
    defaultValue: false
  }
});

module.exports = User;
