var MongoClient = require('mongodb').MongoClient;

function addElement(req) {
    MongoClient.connect("mongodb://localhost:27017",function (err, client) {
      
    var db = client.db('form');
    
    db.collection('data').insertOne(req, function (err) {
      if(err) throw err;
      client.close()
      })
    })
}

module.exports = addElement;