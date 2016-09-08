var path = require('path');
var _root = path.resolve(__dirname, '..');

// Convert all args into an Array representing the path location
// Root directory is added to the front of the path
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}

exports.root = root;
