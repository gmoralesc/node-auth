const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const {
  Schema,
} = mongoose;

const fields = {
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
};

const user = new Schema(fields, {
  timestamps: true,
  toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true,
  },
});

const blacklistFields = ['password'];

user.methods.toJSON = function toJSON() {
  const doc = this.toObject();
  blacklistFields.forEach((field) => {
    if (Object.hasOwnProperty.call(doc, field)) {
      delete doc[field];
    }
  });
  return doc;
};

user.pre('save', function Save(next) {
  if (this.isModified('password') || this.isNew) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10, null));
  }
  next();
});

user.methods.verifyPassword = function verifyPassword(password, callback) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) {
      callback(err);
    } else {
      callback(null, isMatch);
    }
  });
};

module.exports = mongoose.model('user', user);
