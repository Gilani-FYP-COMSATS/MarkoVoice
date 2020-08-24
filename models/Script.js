//required fields: scriptSequence, businessName, user.
const mongoose = require('mongoose');
const sSchema = mongoose.Schema({
  script: [
    {
      //OBjectId
      label: {
        // greetings, infor, questions...
        type: String,
        required: true,
      },
      path: {
        type: String,
        reuqired: true,
      },
      keywords: {
        //helo, sorry, are you the home owner
        type: String,
        required: true,
      },
    },
  ],
  ssTitle: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = Configuration = mongoose.model('scripts', sSchema);
