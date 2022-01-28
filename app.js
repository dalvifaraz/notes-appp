const utils = require('./utils');
const validator = require('validator');
const yargs = require('yargs');

//customize version
yargs.version('1.0.1');

//Create Commands
yargs.command({
  command: 'add',
  describe: 'Add new Note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    description: {
      describe: 'description',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    utils.addNote(argv.title, argv.description);
  }
});
yargs.command({
  command: 'remove',
  describe: 'Remove Note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    utils.removeNote(argv.title);
  }
});
yargs.command({
  command: 'list',
  describe: 'List the notes',
  handler: function () {
    utils.listNote();
  }
});
yargs.command({
  command: 'read',
  describe: 'Read the notes',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    utils.readNote(argv.title);
  }
});
// console.log(utils.addNote());
// console.log(utils.removeNote());
// console.log(yargs.argv);  
yargs.parse();