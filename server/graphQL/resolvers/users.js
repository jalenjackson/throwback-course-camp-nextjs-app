const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
  createUser: async args => {
    try {
      const user = await User.findOne({ email: args.userInput.email });
      if (user) { throw new Error('User already exists') }
      const hashedPassword = await bcrypt.hash(args.userInput.password, 12);
      const createdUser = new User({
        email: args.userInput.email,
        name: args.userInput.name,
        password: hashedPassword
      });
      const result = await createdUser.save();
      const token = await jwt.sign({
        userId: result.id,
        email: result.email,
        name: result.name
      }, process.env.JWT_SECRET_KEY, {
        expiresIn: '1h'
      });
      return {
        ...result._doc,
        password: null,
        token
      }
    } catch (e) { throw e }
  },
  login: async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User does not exist');
    }
    const doesPasswordMatchCurrentBcryptHash = await bcrypt.compare(password, user.password);
    if (!doesPasswordMatchCurrentBcryptHash) {
      throw new Error('Password is incorrect');
    }
    const token = await jwt.sign({
      userId: user.id,
      email: user.email,
      name: user.name
    }, process.env.JWT_SECRET_KEY, {
      expiresIn: 20
    });

    return {
      _id: user.id,
      token,
      email: user.email,
      name: user.name,
      tokenExpiration: 1
    }
  }
};
