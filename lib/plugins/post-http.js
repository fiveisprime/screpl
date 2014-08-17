var request = require('request');

module.exports = function(context) {

  //
  //  POST the specified data to the specific HTTP location (URI).
  //
  context.postHttp = function(data, location) {

    request.post(location, { form: { data: data }}, function(err, response) {
      if (err) {
        throw err;
      }

      console.info('Request POSTed with response %s', response.statusCode);
    });
  };

};
