const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://julianv21:J1000295153@cluster0.kqrpv.mongodb.net/miapp?retryWrites=true&w=majority'
);

const User = mongoose.model('User', {
  name: String,
  edad: Number,
});

const crear = async () => {
  const user = new User({ name: 'julian', edad: 21 });
  const saveUser = await user.save();
  console.log(saveUser);
};

const listUsers = async () => {
  const users = await User.find();
  console.log(users);
};

const fidUsers = async () => {
  const user = await User.find({ name: 'julian' });
  console.log(user);
};

const findUsers = async () => {
  const user = await User.findOne({ name: 'julian' });
  console.log(user);
};

const updtaUser = async () => {
  const user = await User.findOne({ name: 'julian' });
  user.edad = 30;
  await user.save();
};

const deleteUser = async () => {
  const user = await User.findOne({ _id: '628870694cdc5ba9ded93cae' });
  if (user) {
    await user.remove();
  }
};

// deleteUser();
listUsers();
