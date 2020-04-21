const express = require('express');
const app = express();
const port = 3000

app.get('/home', function (req, res) {

    collection = db.collection("categories");
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
})

app.get('/medicines/:categoryId', function (req, res) {
    collection = db.collection("medicines");
    collection.findOne({ "categoryId": new ObjectId(request.params.categoryId) }, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
})

app.get('/categories', function (req, res) {
    collection = db.collection("categories");
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
})

app.get('/addresses', function (req, res) {
    collection = db.collection("addresses");
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
})

app.get('/prescriptions', function (req, res) {
    collection = db.collection("prescriptions");
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
})


app.post('/order', function (req, res) {
    res.send('Thank you for your order')
})
app.listen(port, () => {
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect('mongodb://localhost:27017/ya-saydali', function (err, client) {
        if (err) throw err
        db = client.db('ya-saydali')
    })
})