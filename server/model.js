const mongoose = require('mongoose');

// socialSchema = mongoose.Schema({
//   socialMediaNetwork: String,
//   socialMediaProfile: String,
// });

const kardSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  contact: [
    {}
    // {
    //   type: String,
    //   content: String
    // },
  ],
  social: [
    {}
    // {
    //   type: String,
    //   content: String
    // },
  ],
  work: [
    {}
    // {
    //   type: String,
    //   content: String
    // }
  ]
});

const Kard = mongoose.model('Kard', kardSchema);

module.exports= { Kard };
