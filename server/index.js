const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {PORT, DATABASE_URL} = require('./config');
const { Kard } = require('./model');

const app = express();

app.use(bodyParser.json());
mongoose.Promise = global.Promise;

// API endpoints go here!

app.get('/api/kard', (req, res) => {
  return Kard
    .find()
    .exec()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.send(err);
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

// function runServer(port=3001) {
//   return new Promise((resolve, reject) => {
//     server = app.listen(port, () => {
//       resolve();
//     }).on('error', reject);
//   });
// }

// function closeServer() {
//   return new Promise((resolve, reject) => {
//     server.close(err => {
//       if (err) {
//         return reject(err);
//       }
//       resolve();
//     });
//   });
// }

if (require.main === module) {
  runServer();
}

module.exports = {
  app, runServer, closeServer
};
