var path = require('path');

module.exports = function(screpl, options) {

  //
  // Load internal plugins.
  //
  require('./write-file')(screpl.context);

  //
  // Load external plugins.
  //
  if (options.require) {
    options.require.split(' ').forEach(function(plugin) {
      require(path.resolve(process.cwd(), plugin))(screpl.context);
    });
  }

};
