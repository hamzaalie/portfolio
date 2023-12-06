const Sequelize = require('sequelize');
const sequelize = new Sequelize('user_database', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define User model
const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// Sync the model with the database
sequelize.sync();

// Registration function
const registerUser = async (username, email, password) => {
  return await User.create({ username, email, password });
};

// Login function
const loginUser = async (usernameOrEmail, password) => {
  const user = await User.findOne({
    where: Sequelize.or(
      { username: usernameOrEmail },
      { email: usernameOrEmail }
    ),
  });

  if (user && user.password === password) {
    return user;
  } else {
    return null;
  }
};

module.exports = { registerUser, loginUser };
