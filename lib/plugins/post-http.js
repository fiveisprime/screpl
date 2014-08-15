var request = require('request');

  /*
  *  This plugin sents data to the endpoint (url) user passes as second argument
  * @Param1 : data (contains data to be sent)
  * @Param2 : location (is the URL endpoint)
  *
  */

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
