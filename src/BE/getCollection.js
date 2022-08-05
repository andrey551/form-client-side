var MongoClient = require('mongodb').MongoClient;

function getCollection() {
    var res;
    MongoClient.connect("mongodb://localhost:27017",function (err, client) {
    
        if(err) throw err;

        var db = client.db('form');
        
        res = db.collection('data').find();
    })

    return res;
}

module.exports = getCollection;