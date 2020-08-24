const express = require('express');
const router = express.Router();

//@route    GET api/user
//@access   public
router.get('/', (req, res) => res.send('inside Posts route'));
//router.get('/edit', (req, res) => res.send('inside Posts/edit'));

module.exports = router;
