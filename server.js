'use strict';

const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const ObjectID      = require('mongodb').ObjectID;

const app = express();
app.set('view engine', 'pug');

fccTesting(app); //For FCC testing purposes
app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*
passport.serializeUser((user, done) => {
   done(null, user._id);
 });

passport.deserializeUser((id, done) => {
        db.collection('users').findOne(
            {_id: new ObjectID(id)},
            (err, doc) => {
                done(null, null);
            }
        );
    });
*/

app.route('/').get((req, res) => res.render(
  process.cwd() + '/views/pug/index.pug',
  {
    title: 'Hello',
    message: 'Please login'
  }
));

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port " + process.env.PORT);
});
