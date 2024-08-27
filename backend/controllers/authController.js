const createAccount = require("./auth/createAccount").createAccount;
const login = require("./auth/login").login;
const getUser = require("./auth/getUser").getUser;

module.exports = {
  createAccount,
  login,
  getUser,
};
