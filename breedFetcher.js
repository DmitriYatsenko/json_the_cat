const request = require('request');
const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed.substring(0, 3)}`, (error, response, body) => {
    if (error) {
        console.log('error:', error); // Print the error if one occurred
    }
    else if (!response || response.statusCode !== 200) {
        console.log("Error: breed not found");
    }
    else if (response && response.statusCode === 200) {
        // console.log('statusCode:', response && response.statusCode);
        // console.log('body:', body);
        const data = JSON.parse(body);
        if (data[0] !== [] && data[0] !== undefined) {
            console.log(data[0].description);
            console.log(typeof data[0].description);
        }
    }
});