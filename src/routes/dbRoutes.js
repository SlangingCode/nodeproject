var express = require('express');
var dbRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var eventsData = [ {
    name: 'Event 1',
    description: 'The first event',
    time: '1:00 pm',
    duration: '1 Hour',
    location: {
        streetAddr: '101 Main St.',
        city: 'Los Angeles',
        state: 'CA',
        zip: '87885',
        lon: 0,
        lat: 0
    },
    capacity: 100
},
{
    name: 'Event 2',
    description: 'The second event',
    time: '2:00 pm',
    duration: '2 Hour',
    location: {
        streetAddr: '101 Main St.',
        city: 'Los Angeles',
        state: 'CA',
        zip: '87885',
        lon: 0,
        lat: 0
    },
    capacity: 200
}];

dbRouter.route('/AddEventData')
    .get(function (req, res) {
        var url = 'mongodb://localhost:27017/eventsApp';
        mongodb.connect(url, function(err, db) {
            var collection = db.collection('events');
            collection.insertMany(eventsData, function(err, results) {
                res.send(results);
                db.close();
            });
        });
    });

module.exports = dbRouter;