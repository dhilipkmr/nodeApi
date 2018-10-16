const {MongoClient, ObjectID }= require('mongodb');
const {MongoClient, ObjectID }= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to db server');
    }
    console.log('Connecting to Db succeeded');
    const db = client.db('TodoApp');
    // db.collection('Todos').deleteMany({text: 'lunch'}).then((res) => {
    //     console.log(res);
    
    // })
    // client.close();
});