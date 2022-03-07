const greeting = require("../greeting/index.js");

function greetingMessage(msg) {
  return `${msg} ${greeting}`;
}

module.exports = greetingMessage("Hello Rahul!");
