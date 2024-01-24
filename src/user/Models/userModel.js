const mongoose = require('mongoose');
const key = '123456789trytryrtyr';
const encryptor = require('simple-encryptor')(key);
const Schema = mongoose.Schema;

const userSchema = new Schema({

    // firstname: {
    //     type: String,
    //     required: true
    // },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    this.password = await encryptor.encrypt(this.password, 10);
});

module.exports = mongoose.model('users', userSchema);