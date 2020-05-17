module.exports = function(sequelize, DataTypes) {
    const Item = sequelize.define('Item', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        attack_points: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        healing_points: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    });

    // Making assiosation with User model
    Item.associate = models => {
        Item.belongsTo(models.Inventory, {
          foreignKey: {
              allowNull: false
          },
        });
    };
  
    return Item;
};