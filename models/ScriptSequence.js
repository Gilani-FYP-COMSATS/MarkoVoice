//required fields: scriptSequence, businessName, user.
const mongoose = require('mongoose');
const ssSchema = mongoose.Schema({
  ss: [
    {
      script: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'scripts',
      },
      title: {
        type: String,
        required: true,
      },
      path: {
        type: String,
        reuqired: true,
      },
    },
  ],
  //   package: {
  //     type: String,
  //   },
  //   domain: {
  //     type: String,
  //   },
});

module.exports = Configuration = mongoose.model('scriptSequence', ssSchema);
