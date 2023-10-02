const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  fs.writeFile(filePath, body, 'utf8', (writeError) => {
    if (writeError) {
      console.error(writeError);
      return;
    }
    console.log(`Data from ${url} has been written to ${filePath}`);
  });
});
