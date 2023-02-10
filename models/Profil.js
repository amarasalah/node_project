module.exports=(Sequelize,DataTypes)=>{const Profile = Sequelize.define("Profile", {
    username: {
      type: DataTypes.STRING,
      references: {
        model: User,
        key: "username"
      },
      onUpdate: "cascade",
      onDelete: "cascade"
    },
    password: {
      type: DataTypes.STRING,
      references: {
        model: User,
        key: "password"
      },
      onUpdate: "cascade",
      onDelete: "cascade"
    },
    email: {
      type: DataTypes.STRING,
      references: {
        model: User,
        key: "email"
      },
      onUpdate: "cascade",
      onDelete: "cascade"
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  });
 return Profile;
}
