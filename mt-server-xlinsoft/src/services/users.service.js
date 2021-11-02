
import Users from '../models/users.model.js';

const signInUser = async (userRequest) => {
  let user = await Users.findOneAndUpdate({ email: userRequest.email }, userRequest);
  if(!user) {
    user = new Users(userRequest);
    user = await user.save();
  }
  return user;
};

const findUsers = async () => {
  const users = await Users.find();
  return users;
};

const findUser = async (email) => {
  const user = await Users.findOne({ email });
  return user;
};

const findUserById = async (id) => {
  const user = await Users.findById(id);
  return user;
};

export {
  signInUser,
  findUser,
  findUserById,
  findUsers,
}
