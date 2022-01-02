import mongoose from "mongoose";

/**
 * Records Collection Schema Setup for MongoDB using Mongoose
 */
const recordsSchema = new mongoose.Schema({
  key: String,
  createdAt: Date,
  counts: [{ type: Number }],
  value: String
});

export default mongoose.model('records', recordsSchema);