const fs = require('fs');
const chalk = require('chalk');
const { title } = require('process');

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};
const saveNote = (notes) => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJson);
};
const listNote = (title) => {
  const notes = loadNotes();
  if (notes.length > 0) {
    console.log(chalk.green('Listing all the notes'));
    notes.map((notes) => console.log(notes.title));
  } else console.log(chalk.red('No notes to list'));
};
const readNote = (title) => {
  const notes = loadNotes();
  if (notes.length > 0) {
    const readNote = notes.filter(function (note) {
      return note.title === title;
    });
    if (readNote.length > 0)
      console.log(readNote);
    else console.log(chalk.red(title, 'This title dosen1t exist'));
  } else console.log(chalk.red('No notes to list'));
};
const addNote = (title, description) => {
  const notes = loadNotes();
  const duplicateNote = notes.filter(function (note) {
    return note.title === title;
  });
  if (duplicateNote.length === 0) {
    console.log(chalk.green('note has been added successfully'));
    notes.push({
      title: title,
      description: description,
    });
  } else {
    console.log(chalk.red('This title is already taken'));
  }
  saveNote(notes);
};
const removeNote = (title) => {
  const notes = loadNotes();

  const updatedNote = notes.filter(function (note) {
    return note.title !== title;
  });
  if (notes.length > updatedNote.length) {
    console.log(chalk.green('note has been removed successfully'));
    saveNote(updatedNote);
  } else console.log(chalk.red(title, 'this title dosen`t exist'));

};
module.exports = {
  readNote: readNote,
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
};

