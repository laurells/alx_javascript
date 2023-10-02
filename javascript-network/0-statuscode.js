const request = require('request');

// Check if a URL is provided as an argument
if (process.argv.length !== 3) {
  console.error('Usage: node 0-statuscode.js <URL>');
  process.exit(1);
}

// Get the URL from the command-line argument
const url = process.argv[2];

// Make a GET request to the URL
request(url, (error, response) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }

  // Check for a successful response
  if (response.statusCode === 200) {
    console.log(`Status Code: ${response.statusCode}`);
  } else {
    console.error(`Error: Status Code ${response.statusCode}`);
  }
});
