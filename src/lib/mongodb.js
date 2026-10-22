import mongoose from 'mongoose'

let cached = global._mongoose || { conn: null, promise: null }
global._mongoose = cached

export async function connectDB() {
  const MONGODB_URI = process.env.MONGODB_URI
  if (!MONGODB_URI) throw new Error('MONGODB_URI env var is not set')
  if (cached.conn) return cached.conn
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000,
    })
  }
  try {
    cached.conn = await cached.promise
  } catch (err) {
    // Drop the failed attempt so the next request retries instead of reusing it
    cached.promise = null
    throw err
  }
  return cached.conn
}
