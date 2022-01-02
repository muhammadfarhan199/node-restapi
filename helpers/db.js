import mongoose from 'mongoose';

/**
 * Create database connection using config variables
 */
const connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log(`MongoDb connected : ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

export default connectdb;