module.exports = (sequelize, DataTypes) => {
  const UserTree = sequelize.define('UserTree', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    parent_id: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  });

  UserTree.associate = function (models) {
    // Parent User association (Admin/Dealer)
    UserTree.belongsTo(models.User, { foreignKey: 'parent_id', as: 'parent' });

    // Child User association (Dealer/Client)
    UserTree.belongsTo(models.User, { foreignKey: 'user_id', as: 'child' });
    
    // Nested children (Dealer -> Client relationship)
    UserTree.hasMany(models.UserTree, { foreignKey: 'parent_id', as: 'children' });
  };

  return UserTree;
};
