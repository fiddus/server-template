/**
 * Server application main file
 */

'use strict';

var express = require('express'),
    config = require('./config/environment'),
    mongoose = require('mongoose'),
    app = express(),
    server = require('http').createServer(app),
    sequence = require('sequence').Sequence.create(),
    MONGODB_URI = config.db.baseUrl + config.db.appDB;

require('./config/express')(app);
require('./routes')(app);

sequence
    .then(function (next) {
        mongoose.connect(MONGODB_URI, {}, function (err) {

            if (err) {
                return console.log('Erro connecting to mongoDB', err);
            } else {
                if (app.get('env') !== 'test') {
                    console.log('Connected to mongoDB.');
                }
                next();
            }
        });
    })
    .then(function () {
        server.listen(config.port, function () {
            if (app.get('env') !== 'test') {
                console.log('Express server listening on port', config.port, 'on', app.get('env'), 'mode');
            }
        });
    });

module.exports = app;
