import mongoose from 'mongoose';

const connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true
    });

    console.log(`MongoDb connected : ${conn.connection.host}`);
  } catch (err) {
    console.err(err);
    process.exit(1);
  }
}

export default connectdb;