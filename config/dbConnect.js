import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI_CONNECT;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGO_URI_CONNECT environment variable");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    console.log("✅ Reusing MongoDB connection");
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = { bufferCommands: false };
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("🚀 MongoDB connected!");
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
