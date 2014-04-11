var template = require('hbs!./template')

exports.index = function(name) {
  this.renderIn(template, 'body', {
    name: name.toUpperCase()
  });
}
