module.exports = function(sequelize, DataTypes) {
  const Hero = sequelize.define('Hero', {
    name: DataTypes.STRING,
    health_points: {
      type: DataTypes.INTEGER,
      defaultValue: '150',
    },
    attack_points: {
      type: DataTypes.INTEGER,
      defaultValue: '20',
    },
  });
  return Hero;
};
