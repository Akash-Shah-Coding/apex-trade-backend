module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: DataTypes.STRING
  });

  Role.associate = function(models) {
    // A role has many users
    Role.hasMany(models.User, { foreignKey: 'role_id' });

    // A role can have multiple permissions
    Role.belongsToMany(models.Permission, { through: 'RolePermission', foreignKey: 'role_id' });
  };

  return Role;
};
