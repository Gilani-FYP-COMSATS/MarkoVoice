const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const UserModel = require('../../models/User');
const gravatar = require('gravatar');
const auth = require('../../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
//let config
//@route    GET api/configuration
//@desc     Register a configuration (get a token after registration)
//@access   public
router.post(
  '/',
  [
    check('name', 'user is required').not().isEmpty(),
    check('email', 'Email is required').not().isEmpty(),
    check('password', 'password is required').not().isEmpty(),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      //Later before storing configuration, check if this user has already configured
      //console.log('try starts');
      let user = new UserModel({ name, email, password });
      //console.log('user');
      await user.save(); //storing user in DB
      console.log('** user saved in database: **\n' + user);
      // generate token
      const payload = await {
        user: {
          id: user.id,
        },
      };
      jwt.sign(payload, config.get('jwtSecret'), (err, token) => {
        if (err) throw err;
        res.json({ token });
      });

      console.log('token also generated: check on postman');
    } catch (err) {
      res
        .status(500)
        .send('server error: inside user route: cant save user: ' + err.msg);
    }
  }
);

module.exports = router;
