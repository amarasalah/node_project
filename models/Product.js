module.exports=(Sequelize,DataTypes)=>{
    const Product=Sequelize.define("Product",{
        name: {
            type: DataTypes.STRING,
            allowNull: false
          },
          description: {
            type: DataTypes.TEXT,
            allowNull: false
          },
          price: {
            type: DataTypes.FLOAT,
            allowNull: false
          },
          stock: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          imageUrl: {
            type: DataTypes.STRING
          }
    })
    Product.associate=models=>{
        Product.belongsTo(models.User, {
            onDelete: "cascade"
        })

    }
    return Product    
}