import mongoose from 'mongoose';
const { Schema } = mongoose;

const usersSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  }
}, { versionKey: false });

const Users = new mongoose.model('users', usersSchema);

export default Users;
