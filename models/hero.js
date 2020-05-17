module.exports = function(sequelize, DataTypes) {
  const Hero = sequelize.define('Hero', {
    name: { 
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 64],
    },  
    health_points: {
      type: DataTypes.INTEGER,
      defaultValue: '100',
    },
    attack_points: {
      type: DataTypes.INTEGER,
      defaultValue: '20',
    }
  });

  // Making assiosation with User model
  Hero.associate = models => {
    Hero.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      },
    });

    Hero.hasOne(models.Inventory, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Hero;
};