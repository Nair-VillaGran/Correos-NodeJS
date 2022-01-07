const { config } = require("dotenv");
config();

//Email
const emailSend = process.env.email;

//Password
const passwordSend = process.env.password;

module.exports.emailSend = emailSend;
module.exports.passwordSend = passwordSend;


