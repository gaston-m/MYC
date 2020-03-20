// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const documents = sequelizeClient.define('documents', {
    types: {
      type: DataTypes.STRING,
      allowNull: false
    },
    art: {
      type: DataTypes.STRING, allowNull: false
    },
    compId: { type: DataTypes.STRING, allowNull: false},
    impo: { type: DataTypes.REAL}
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  documents.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return documents;
};
