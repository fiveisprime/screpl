var program = require('commander')
  , screpl  = require('./screpl');

program
  .version(require('../package').version)
  .usage('<url>')
  .option('-r, --require <module>', 'require a plugin module', null)
  .parse(process.argv);

if (!program.args.length) {
  program.help();
} else {
  screpl.scrape(program);
}
