module.exports = (sequelize, DataTypes) => {
  const Valuation = sequelize.define(
    "valuation",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      receita_venda_bens_servicos: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      crescimento_receita_venda_bens_servicos: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      custo_bens_servicos: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      crescimento_custo_bens_servicos: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      despesas_operacionais: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      crescimento_despesas_operacionais: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      depreciacoes: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      crescimento_depreciacoes: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      despesas_financeiras: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      crescimento_despesas_financeiras: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      variacao_investimentos: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      crescimento_variacao_investimentos: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      ir_csll: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      empresa_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "empresa", key: "id" },
      },
    },
    {
      tableName: "valuation",
    }
  );

  Valuation.associate = function (models) {
    Valuation.belongsTo(models.empresa, {
      as: "empresa",
      foreignKey: "empresa_id",
    });
  };
  return Valuation;
};
