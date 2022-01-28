const getNotes = require('./utils');
const validator = require('validator');
const chalk = require('chalk');
const Danger = chalk.hex('#FF0000');

note = getNotes();

console.log(note);
validator.isEmail('foo@bar.com'); //=> true
console.log(chalk.green('Success!'));
console.log(Danger('Danger!'));
console.log(chalk.italic.red('Warning'));
console.log(chalk.inverse.bold.blue('Inverse'));
