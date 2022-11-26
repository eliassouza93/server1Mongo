import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://server-node:111@cluster0.xkbfqsk.mongodb.net/server-teste');

let db = mongoose.connection;

export default db;