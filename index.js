
hexo.extend.tag.register('t', function(args, content){
  var actual = args[0].replace('"', "'");
  var english = args[1].replace('"', "'");
  return `<span class='translation' title=\"${english}\">${actual}</span>`;
});
