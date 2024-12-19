module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
  });

  User.associate = function(models) {
    // A user has a role (Admin, Dealer, Client)
    User.belongsTo(models.Role, { foreignKey: 'role_id' });
    
    // A user can have children (users they manage, such as clients)
    User.hasMany(models.UserTree, { foreignKey: 'parent_id', as: 'managedUsers' });

    // A user can belong to a parent (they could be a child under Admin or Dealer)
    User.hasMany(models.UserTree, { foreignKey: 'user_id', as: 'hierarchyParents' });
  };

  return User;
};
