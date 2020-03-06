var apiai = require('apiai');
var sess = Math.floor(Math.random() * 1000);
var ts = Date.now();
//var session = request.session;
//Enter your API Key
var app = apiai('9c0b5cd09e1c462a9bdd799647bd4867');

// Function which returns speech from api.ai
var getRes = function(query) {
  var request = app.textRequest(query, {
      sessionId: ("1"+ sess)
  });
const responseFromAPI = new Promise(
        function (resolve, reject) {
request.on('error', function(error) {
    reject(error);
});
request.on('response', function(response) {
  resolve(response.result.fulfillment.speech);
});
});
request.end();
return responseFromAPI;
};

// test the command :
//getRes('hello').then(function(res){console.log(res)});

module.exports = {getRes}
