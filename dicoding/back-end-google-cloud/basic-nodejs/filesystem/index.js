// TODO: tampilkan teks pada notes.txt pada console.

const fs = require('fs');
const path = require('path');

fs.readFile(path.resolve(__dirname, 'notes.txt'), 'UTF-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);
});
