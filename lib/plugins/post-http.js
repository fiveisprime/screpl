var request = require('request');

  //
  //  This plugin sends data to the endpoint (url)
  //

module.exports = function(context) {

  context.postHttp = function(data, location) {

    request.post(location, {form: {data : data}}, function(err) {
      if (err) {
        throw err;
      }
      
      console.info('Successfully Posted Data');
      
    });
  };
  
};
