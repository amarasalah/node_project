
module.exports=(Sequelize,DataTypes)=>{const User = Sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false

    }
  })
  User.associate=models=>{

    User.hasMany( models.Product,{
      onDelete:"cascade"
    })
    User.hasOne(models.Profil,{
      onDelete:"cascade"
    })

    }
  
  return User;
};