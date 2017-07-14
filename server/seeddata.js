const { Kard } = require('./model.js');
const mongoose = require('mongoose');
const {DATABASE_URL} = require('./config');

const userToCreate = {
  userName: 'PBateman',
  password: 'password',
  firstName: 'Patrick',
  lastName: 'Bateman',
  contact: [
    {
      type: 'Email',
      content: 'pbateman@pierceandpierce.com'
    },
    {
      type: 'Phone Number',
      content: '2125556342'
    },
    {
      type: 'Address',
      content: 'Pierce & Pierce 358 Exchange Place New York, N.Y.'
    }
  ],
  social: [
    {
      type: 'Facebook',
      content: 'facebook.com/patrick.bateman'
    },
    {
      type: 'Instagram',
      content: '@patrickbateman'
    },
    {
      type: 'Twitter',
      content: '@patrickbateman'
    }
  ],
  work: [
    {
      type: 'LinkedIn',
      content: 'linkedIn.com/patrick.bateman'
    },
    {
      type: 'Personal Website',
      content: 'patrickbateman.com'
    },
    {
      type: 'Github',
      content: 'github.com/patrickbateman'
    }

  ]
};

mongoose.connect(DATABASE_URL, err => {
  if (err) {
    console.error(err);
  }
  Kard
    .create(userToCreate)
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.error(err);
    });
});
