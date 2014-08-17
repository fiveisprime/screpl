var path = require('path');

module.exports = function(screpl, options) {

  //
  // Load internal plugins.
  //
  require('./write-file')(screpl.context);
  require('./post-http')(screpl.context);

  //
  // Load external plugins.
  //
  if (options.require) {
    require(path.resolve(process.cwd(), options.require))(screpl.context);
  }

};
