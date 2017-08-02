const models = require('../models');
const Promise = require('bluebird');
const _ = require('underscore');
//const parseCookie = require('./cookieParser');

module.exports.createSession = (req, res, next) => {
  
  //if the user has no cookie
  var promise = function() { 
    if (req.cookies.shortlyid === undefined) {
      throw err;
    } else {
      return req.cookies.shortlyid;
    }
  }
    .then(function(hash) {
      if (!hash) {
        throw hash;
      }
      return models.Sessions.get({hash: hash});
    }) .then(function(sessionResult) {
      if (!sessionResult) {
        throw sessionResult;
      } return sessionResult;
    }) .catch(function() {
      return models.Sessions.create()
        .then(function(OKPacket) {
          return models.Sessions.get({id: OKPacket.insertId});
        })
        .then(function(session) {
          res.cookie('shortlyid', session.hash);
          return session;
        });
        
    }) .then(function(session) {
      req.session = session;
      next();
    });    
};
      //then throw 
  // if there is a session
      //retreive the session from the database
        //if the session is not in the database, throw

  //throw will create a new session

  //then assign the session to the request.  

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

