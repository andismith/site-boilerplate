module.exports.register = function(Handlebars, options) {
  Handlebars.registerHelper('found', function(a, b, opts) {
    if (a.indexOf(b) > -1) {
      return opts.fn(this);
    } else {
      return opts.inverse(this);
    }
  });
};