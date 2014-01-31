var request = require('request')
  , cheerio = require('cheerio')
  , screpl;

//
// Format and write an error message.
//
function writeError(msg) {
  console.log();
  console.log('  \033[33merror:\033[0m', msg);
  console.log();
}

//
// Scrape and start the REPL.
//
exports.scrape = function(options) {
  request(options.args[0], function(err, response) {
    if (err) {
      return writeError(err.message);
    }

    if (response.statusCode !== 200) {
      return writeError(response.body);
    }

    console.log();
    console.log('  request loaded with %s', response.statusCode);
    console.log('  use the variable `$` to access the result');
    console.log();

    //
    // Start the REPL and attach the JQuery object to the context.
    //
    screpl = require('repl').start('> ');
    screpl.context.$ = cheerio.load(response.body);

    //
    // Bootstrap plugins.
    //
    require('./plugins')(screpl, options);
  });
};
