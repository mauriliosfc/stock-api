module.exports = (sequelize, DataTypes) => {

    const Produtos = sequelize.define('produtos', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
        },
        quantidade: {
            type: DataTypes.INTEGER,
        },
        preco: {
            type: DataTypes.INTEGER,
        }
    }, {
        tableName: 'produtos'
    });
    return Produtos
}