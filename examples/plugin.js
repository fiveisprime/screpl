var out = [];

//
// Plugins expose a function that accepts the REPL context.
//
module.exports = function(context) {

  //
  // Expose functions to the REPL context by attaching them.
  //
  context.getText = function() {

    //
    // Access the jQuery object from within the plugin.
    //
    context.$('p').each(function() {
      out.push(this.text());
    });

    //
    // The return value will be written to standard out.
    //
    return out.join(' ');
  };
  
  //
  // Expose variables the same way.
  //
  context.links = context.$('a');

};
