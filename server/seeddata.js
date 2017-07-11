const { Kard } = require('./model.js');
const mongoose = require('mongoose');
const {DATABASE_URL} = require('./config');

const userToCreate = {
  userName: 'StevePerry',
  password: 'password',
  firstName: 'Steve',
  lastName: 'Perry',
  contact: [
    {
      type: 'Email',
      content: 'steve@steveperry.com'
    },
    {
      type: 'phoneNumber',
      content: '5555555555'
    }
  ],
  social: [
    {
      type: 'Facebook',
      content: 'facebook.com/steve.perry'
    },
    {
      type: 'Instagram',
      content: '@steveperry'
    }
  ],
  work: [
    {
      type: 'LinkedIn',
      content: 'linkedIn.com/steve.perry'
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
