module.exports = (sequelize, DataTypes) => {
  const Permission = sequelize.define('Permission', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: DataTypes.STRING
  });

  Permission.associate = function(models) {
    // A permission can belong to many roles
    Permission.belongsToMany(models.Role, { through: 'RolePermission', foreignKey: 'permission_id' });
  };

  return Permission;
};
