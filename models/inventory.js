module.exports = function(sequelize, DataTypes) {
    const Inventory = sequelize.define('Inventory', {
        itemId: {
                type: DataTypes.INTEGER,
                allownull: true
        }
    });

    // Making assiosation with User model
    Inventory.associate = models => {
      Inventory.belongsTo(models.Hero, {
        foreignKey: {
            allowNull: false
        }    
      });

      Inventory.hasMany(models.Item, {
        foreignKey: {
            allowNull: false
        }
      });
    };

    return Inventory;
};