module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        validate: {
          isEmail: true,
        },
        unique: true,
        type: DataTypes.STRING,
      },
      senha: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "user",
    }
  );

  User.associate = function (models) {
    User.hasMany(models.empresa, {
      as: "user",
      foreignKey: "user_id",
    });
  };
  return User;
};
