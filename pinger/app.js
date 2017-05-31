var request = require('request');

var target = process.env.TARGET || "https://www.wikipedia.org/";
console.log("Target: ", target);

function ping() {
    console.log(new Date().toISOString());
    request(target, function (error, response, body) {
       console.log('error:', error);
       console.log('statusCode:', response && response.statusCode); 
       console.log('body:', body);
    });
}


setInterval(ping, 15000);
