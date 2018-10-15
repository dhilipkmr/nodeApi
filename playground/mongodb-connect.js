const {MongoClient, ObjectID }= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to db server');
    }
    console.log('Connecting to Db succeeded');
    const db = client.db('TodoApp');
    db.collection('Todos').find({
        __id: new ObjectID('5bc4ce24b65f864841914857')
    })
    .toArray()
    .then((docs) => {
        console.log('Todos', JSON.stringify(docs, undefined, 2));
        }, (err) => {
            if (err) {
                console.log("Unable to fetch from db");
            }
        });
    db.collection('Todos').find().count().then((count) => {
        console.log('Count:', count)
    });
    client.close();
});