const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const ScriptModel = require('../../models/Script');
const gravatar = require('gravatar');
const auth = require('../../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

//@route    POST api/sripts
//@desc     create a new script - body = script: array, ssTitle: String
//@access   public
router.post(
  '/',
  [
    check('script', 'script is required is required').not().isEmpty(),
    check('ssTitle', 'ssTitle is required is required').not().isEmpty(),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { script, ssTitle } = req.body;

    try {
      let scripts = await ScriptModel.findOne({ ssTitle: req.body.ssTitle });

      console.log('if starting');
      if (scripts) {
        return res.json('script with this title already exist!');
      }

      scripts = new ScriptModel();

      scripts.ssTitle = ssTitle;
      scripts.script = script; // obj.script;

      await scripts.save();
      console.log(scripts);
      return res.status(200).json(scripts);
    } catch (err) {
      res
        .status(500)
        .send('server error: inside scripts: cant save script: ' + err.msg);
    }
  }
);

//@route    PUT api/sripts
//@desc     Edit a script - body = script: array - query = ssTitle
//@access   public
router.put(
  '/',
  [check('script', 'script is required is required').not().isEmpty()],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { script } = req.body;
    const queryssTitle = req.query.ssTitle;
    try {
      console.log('try starts');
      let scripts = await ScriptModel.findOne({ ssTitle: queryssTitle });

      if (scripts) {
        scripts.script = null; //delete old script totally,
        scripts.script = script; // add new script in place of old
        await scripts.save();
        console.log('script edited successfully! for: ' + queryssTitle);
        return res.status(200).json(scripts);
      }
      return res
        .status(404)
        .json('No script found to edit, named: ' + queryssTitle);
      //   scripts = new ScriptModel();
    } catch (err) {
      res
        .status(500)
        .send('server error: inside scripts: cant save script: ' + err.msg);
    }
  }
);

//@route    DELETE api/sripts
//@desc     delete a script - query = ssTitle
//@access   public
router.delete(
  '/',

  async (req, res) => {
    const { script } = req.body;
    const queryssTitle = req.query.ssTitle;
    try {
      console.log('try starts');
      let scripts = await ScriptModel.findOne({ ssTitle: queryssTitle });

      if (scripts == null) {
        console.log('No script found for title: ' + queryssTitle);
        return res
          .status(404)
          .send('No script found for title: ' + queryssTitle);
      }
      await ScriptModel.deleteOne({ ssTitle: queryssTitle });
      console.log('script deleted successfully! named: ' + queryssTitle);
      return res.status(200).json('script deleted! title: ' + queryssTitle);

      //return res.json('No script found to edit, create new ONe');
      //   scripts = new ScriptModel();

      //   scripts.ssTitle = ssTitle;
      //   scripts.script = script; // obj.script;

      //   await scripts.save();
      //   console.log(scripts);
      //   return res.json(scripts);
    } catch (err) {
      res
        .status(500)
        .send('server error: inside scripts: cant save script: ' + err.msg);
    }
  }
);

module.exports = router;
