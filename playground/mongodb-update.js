const {MongoClient, ObjectID }= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to db server');
    }
    console.log('Connecting to Db succeeded');
    const db = client.db('TodoApp');
    db.collection('Todos').findOneAndUpdate(
        {
            text: 'eat'
        }, {
            $set: {text: 'Ate'}
        }, {
            returnOriginal: false
        }).then((res) => {
            console.log(res);
    });
    db.collection('Users').findOneAndUpdate(
        {
            name: 'Dhilipkk'
        },{
            $set: {
                name: 'kk'
            }
        },{
            returnOriginal: false
        }).then((res) => {
        console.log(res);
    });
    // client.close();
});