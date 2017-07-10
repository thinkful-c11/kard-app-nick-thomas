const { Kard } = require('./model.js');
const mongoose = require('mongoose');
const {DATABASE_URL} = require('./config');

const userToCreate = {
  userName: 'StevePerry',
  password: 'password',
  firstName: 'Steve',
  lastName: 'Perry',
  email: 'steve@steveperry.com',
  phoneNumber: '5555555555',
  social: [
    {
      facebook: 'facebook.com/steve.perry'
    },
    {
      gitHub: 'github.com/steveperry'
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
