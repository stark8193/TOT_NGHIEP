const mongoose = require('mongoose');

async function connect() {
  try {
    mongoose
      .connect('mongodb://127.0.0.1:27017/SHOPTLU')
      .then(() => console.log('Connected!'));
  } catch (error) {
    console.log('LOI?');
  }
}

module.exports = { connect };
