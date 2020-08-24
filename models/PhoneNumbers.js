//required fields: scriptSequence, businessName, user.
const mongoose = require('mongoose');
const pnSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  numbersList: {
    type: Object,
    required: true,
  },
  //   package: {
  //     type: String,
  //   },
  //   domain: {
  //     type: String,
  //   },
});

module.exports = Configuration = mongoose.model('phoneNumbers', pnSchema);
