var path = require('path')
var glob = require('glob')

function getEntry(globPath){
  var entries = {},
     basename, tmp, pathname,viewname;
   glob.sync(globPath).forEach(function (entry) {
     tmp = entry.split('/').splice(-3);
     viewname = tmp[1];
     basename = path.basename(entry, path.extname(entry));
     pathname = tmp.splice(0, 1) + '/' + viewname + '/' + basename; // 正确输出js和html的路径
     entries[pathname] = entry;
   });
   return entries;
}

module.exports = getEntry;
