/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const fs = require('fs');
const path = require('path');

const readable = fs.createReadStream(path.resolve(__dirname, 'input.txt'), {
  highWaterMark: 15,
});
const writable = fs.createWriteStream(path.resolve(__dirname, 'output.txt'));

readable.on('data', (chunk) => {
  writable.write(chunk + '\n');
});

readable.on('end', () => {
  writable.end();
});
