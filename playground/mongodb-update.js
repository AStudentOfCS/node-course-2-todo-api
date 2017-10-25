// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server!!!');
  }
  console.log('Connected to MongoDB server!');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59f03d16a4968716183c807f')
  }, {
    $set: {
      name: 'AStudentOfCS'
    },
    $inc: {
      age: 7
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('59f03ba9e70e040db84bb603')
  // }, {
  //   $set: {
  //     completed: false
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // db.close();
});
