var view = require('./view');

exports.index = function(name) {
  this.render(view.index, name);
};
