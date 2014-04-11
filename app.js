exports.start = function(u){
  var ctrl = require('./index/ctrl');
  u.get('index/{name}',ctrl.index);
  u.run('index/hello world');
}
