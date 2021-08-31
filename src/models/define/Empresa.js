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
            validate: {
                isEmail: true
            },
            unique: true,
            type: DataTypes.STRING
        },
    }, {
        tableName: 'empresa'
    });
    return Empresa
}