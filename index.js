const read = require("readline-sync");
const shell = require("shelljs");
const userName = read.question("Enter User Name: ");
const password = read.question("Enter Your Password: ");
console.log(`
`);
shell.exec(`npx  htpasswd -nb -c ${userName} ${password}`);
