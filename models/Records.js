import mongoose from "mongoose";

const recordsSchema = new mongoose.Schema({
  key: String,
  createdAt: Date,
  counts: [{ type: Number }],
  value: String
});

export default mongoose.model('records', recordsSchema);