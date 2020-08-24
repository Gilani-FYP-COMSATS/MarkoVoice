//required fields: scriptSequence, businessName, user.
const mongoose = require('mongoose');
const ConfigurationSchema = mongoose.Schema({
  user: {
    //Later...
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',  //(user from masha's database)
  },
  package: {
    type: String,
  },
  domain: {
    type: String,
  },
  // business information .......................
  businessInfo: {
    businessName: {
      type: String,
    },
    businessDescription: {
      type: String,
    },
    areaOfOperatingBusiness: {
      type: String,
    },
    businessEmail: {
      type: String,
    },
    phone: {
      type: String,
    },
  },
  //Domain informtaion ................. an array of an object containing further objects
  domainInfo: [
    {
      sellBuyRent: {
        type: String,
      },
      propertyType: {
        type: String,
      },
      size: {
        type: String,
      },
      locationCity: {
        type: String,
      },
      locationAddress: {
        type: String,
      },
      bedRooms: {
        type: String,
      },
      kitchen: {
        type: String,
      },
      garage: {
        type: String,
      },
    },
  ],
  botVoice: {
    type: String,
  },
  scriptSequence: {
    //ref here
    type: [String],
    required: true,
  },
  phoneNumbers: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Configuration = mongoose.model(
  'configurations',
  ConfigurationSchema
);
