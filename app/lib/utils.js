import mongoose from 'mongoose';

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    if (!process.env.MONGO) {
      throw new Error('MongoDB URI not provided');
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
