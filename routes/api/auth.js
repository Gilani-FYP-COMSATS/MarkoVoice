const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const UserModel = require('../../models/User.js');
const auth = require('../../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

router.get('/', auth, async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).send('server error in auth get route: ' + err.message);
  }
});

//@route    Post api/auth
//@access   public
router.post(
  '/',
  [
    check('email', 'Valid email is required').isEmail(),
    check('password', 'password required').exists(),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      //console.log('inside POST api/auth, try starts');
      let user = await UserModel.findOne({ email });
      //check if user dont exist
      if (user == null) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'invalid credentials' }] });
      }

      //check if password is correct
      const isMatch = await bcrypt.compare(password, user.password); //firts arg is palin password, second arg is encrypted pass from database
      if (isMatch == null) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'invalid credentials' }] });
      }
      //console.log('generating token now!');
      //use jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(payload, config.get('jwtSecret'), (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (err) {
      res
        .status(500)
        .send('server error: failded to register user (inside users.js)');
    }

    //if email and password is correct it will return token
  }
);

module.exports = router;
