const { config } = require("dotenv");
config();

//Email
const emailSend = process.env.email;

//Password
const passwordSend = process.env.password;

const PORT = process.env.PORT || 3000;

module.exports.emailSend = emailSend;
module.exports.passwordSend = passwordSend;
module.exports.PORT = PORT;


