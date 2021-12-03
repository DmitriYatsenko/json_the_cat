const request = require('request');

const fetchBreedDescription = function (breed, callback) {
    request(`https://api.thecatapi.com/v1/breeds/search?q=${breed.substring(0, 3)}`, (error, response, body) => {
        const data = JSON.parse(body);
        if (error) {
            return callback(error);
        }
        else if (data[0] === undefined || data[0].length === 0) {
            error = "Breed not found";
            return callback(error);
        }
        else {
            error = null;
            return callback(error, data[0].description);
        }
    });
};

module.exports = { fetchBreedDescription };