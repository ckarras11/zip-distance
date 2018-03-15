const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { DATABASE_URL, PORT } = require('./config');
const { zip } = require('./models/zip');
const path = require('path');


// Initializing app
const app = express();
mongoose.Promise = global.Promise;

app.use(express.static(path.join(__dirname, 'build')));

// Morgan logging middleware
app.use(morgan('common'));

// Bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());


app.get('/api', (req, res) => {
  const { zip1, zip2 } = req.query
  return zip
      .find({ 
        $or : [{Zipcode: zip1}, {Zipcode: zip2}]
      })
      .then((locations) => {
          res.status(200).json(locations.map(location => location.apiRepr()));
      })
      .catch((err) => {
          console.error(err);
          res.status(500).json({ error: 'Something went wrong' });
      });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'))
})
// Initializing Server
let server;

function runServer(databaseUrl = DATABASE_URL, port = PORT) {
  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, (err) => {
      if (err) {
        return reject(err);
      }
      server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      })
        .on('error', (err) => {
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
      server.close((err) => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}

if (require.main === module) {
  runServer().catch(err => console.error(err));
}

module.exports = { app, runServer, closeServer };
