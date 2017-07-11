const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {PORT, DATABASE_URL} = require('./config');
const { Kard } = require('./model');

const app = express();

app.use(bodyParser.json());
mongoose.Promise = global.Promise;



app.get('/api/kard', (req, res) => {
  return Kard
    .find()
    .exec()
    .then(response => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch(err => {
      res.send(err);
    });
});


app.post('/api/kard', (req,res) => {

  const requiredFields = ['userName', 'password', 'firstName', 'lastName'];
  for (let i=0; i<requiredFields.length; i++) {
    const field=requiredFields[i];
    if(!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`;
      console.error(message);
      return res.status(400).send(message);
    }
  }
  Kard
  .create({
    userName: req.body.userName,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  })
  .then(Kard => res.status(201).json(Kard))
  .catch(err => {
    console.error(err);
    res.status(500).json({message: 'Internal server error'});
  });
});




app.put('/api/kard/update/:id', (req, res) => {

  // if(!(req.params.id && req.body.id && req.params.id === req.body.id)) {
  //   res.status(400).json({
  //     error: 'Request path id and request body id values must match'
  //   });
  // }

  const updated = {};
  const updateableFields = ['social', 'work', 'contact'];
    updateableFields.forEach(field => {
        if (field in req.body) {
          updated[field] = req.body[field];
      }
    });

    Kard
    .findByIdAndUpdate(req.params.id, {$push: updated}, {new: true})
    .exec()
    .then(updatedKard => res.status(201).json(updatedKard))
    .catch(err => res.status(500).json({message: 'Something went wrong'}));
});





app.put('/api/kard/delete/:id', (req, res) => {

  // if(!(req.params.id && req.body.id && req.params.id === req.body.id)) {
  //   res.status(400).json({
  //     error: 'Request path id and request body id values must match'
  //   });
  // }

  const updated = {};
  const updateableFields = ['social', 'work', 'contact'];
    updateableFields.forEach(field => {
        if (field in req.body) {
          updated[field] = req.body[field];
      }
    });

    Kard
    .findByIdAndUpdate(req.params.id, {$set: updated}, {new: true})
    .exec()
    .then(updatedKard => res.status(201).json(updatedKard))
    .catch(err => res.status(500).json({message: 'Something went wrong'}));
});



app.delete('/api/kard/:id', (req,res) => {
  Kard
  .findByIdAndRemove(req.params.id)
  .exec()
  .then(() => {
    console.log(`Deleted Kard with id \` ${req.params.id}\``);
    res.status(204).end();
  });
});






// Serve the built client
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
  const index = path.resolve(__dirname, '../client/build', 'index.html');
  res.sendFile(index);
});

let server;

function runServer(databaseUrl=DATABASE_URL, port = PORT) {

  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      })
      .on('error', err => {
        mongoose.disconnect();
        reject(err);
      });
    });
  });
}

function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log('Closing server');
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}



if (require.main === module) {
  runServer();
}

module.exports = {
  app, runServer, closeServer
};
