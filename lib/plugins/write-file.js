var fs = require('fs');

module.exports = function(context) {

  //
  // Write some data to a file.
  // Creates a new file with the name supplied if the file does not exist.
  //
  context.writeFile = function(data, file) {
    fs.open(file, 'a+', function(err, fd) {
      if(err) {
        throw err;
      }

      var buffer = new Buffer(data);

      fs.write(fd, buffer, 0, buffer.length, null, function(err) {
        if(err) {
          throw err;
        }
      });
    });

  };
};
