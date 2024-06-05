const User = require('../model/user');

class UserController {
  async getUser(req, res, next) {
    try {
      const user = await User.findById(req.params.id);
      return res.send(user);
    } catch (err) {
      next(err);
    }
  }

  async getAll(req, res, next) {
    try {
      const users = await User.find({});
      return res.send(users);
    } catch (err) {
      next(err);
    }
  }

  async updateUser(req, res, next) {
    try {
      const { _id, avatar, name, role, phone, country, city } = req.body;
      const updatedUser = await User.findByIdAndUpdate(
        _id,
        { avatar, name, role, phone, country, city },
        { new: true, runValidators: true }
      );
      if (updatedUser) {
        return res.send(updatedUser);
      } else {
        console.log('User not found');
        next();
      }
    } catch (err) {
      next(err);
    }
  }

  async createUser(req, res, next) {
    try {
      const createdUser = await User.create(req.body);
      return res.send(createdUser._id);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
