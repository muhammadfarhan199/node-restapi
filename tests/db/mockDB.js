import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

//setting up in memory mock database to test out the service
let mongod = undefined;

const connect = async () => {
  mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();

  const mongooseOpts = {
    useNewUrlParser: true
  };

  await mongoose.connect(uri, mongooseOpts);
};

const closeDatabase = async () => {
  if (mongod) {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongod.stop();
  }
};

const clearDatabase = async () => {
  if (mongod) {
    const collections = mongoose.connection.collections;

    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany();
    }
  }
};

export default { connect, closeDatabase, clearDatabase };