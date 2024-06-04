const { Auth } = require('@blocklet/sdk');

class UserController {
  getUser(req, res, next) {
    return res.send({
      avatar: 'https://p.ipic.vip/hllizo.JPG',
      name: 'Qiqi Zhao',
      phone: '13152486382',
      role: 'FRONTEND',
      country: 'China',
      city: 'Guangdong Huizhou',
      email: 'bme_ritter@foxmail.com',
    });
  }

  updateUser(req, res, next) {
    const user = req.body;
    return res.send(user);
  }
}

module.exports = UserController;
