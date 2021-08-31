module.exports = (sequelize, DataTypes) => {

    const Empresa = sequelize.define('empresa', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            allowNull: false,
            type: DataTypes.STRING
        },
        cnpj: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING
        },
        user_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: sequelize.models.user,
                key: 'id',
            },
        }
    }, {
        tableName: 'empresa'
    });

    Empresa.associate = function (models) {
        Empresa.belongsTo(models.user, {
            as: 'user',
            foreignKey: 'user_id',
        });
    }
    return Empresa
}