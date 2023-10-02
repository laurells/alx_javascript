const request = require('request');

const movieID = process.argv[2];

if (process.argv.length > 2) {
  const url = `https://swapi-api.alx-tools.com/api/films/${movieID}`;
  
  request(url, (error, response, body) => {
    if (error) {
      return console.error(error);
    }
    
    const movies = JSON.parse(body);
    
    movies.characters.forEach((characterURL) => {
      request(characterURL, (error, response, body) => {
        if (error) {
          return console.error(error);
        }
        
        const character = JSON.parse(body);
        console.log(character.name);
      });
    });
  });
}
