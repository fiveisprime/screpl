var fs = require('fs');

module.exports = function(context) {

  //
  // Write some data to a file.
  //
  context.writeFile = function(data, file) {
    fs.writeFile(file, data, function(err) {
      if (err) {
        throw err;
      }
    });
  };
};
