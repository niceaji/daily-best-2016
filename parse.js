
var fs = require('fs');
var _ = require('lodash');
var numeral = require('numeral');
var data = require('./data365.json');
var colors = ['#d11141', '#00b159' , '#00aedb', '#f37735', '#ffc425'];

var articles = [];

for(var key in data){

  articles.push(_.extend({
    index: +key.replace(/-/g,'')
  }, data[key]))

}

articles = _.orderBy(articles, 'index', 'desc');

articles.forEach(function(item,i){
  item = _.extend(item, {
    color: colors[i % colors.length],
    viewCount: numeral(item.viewCount).format('0,0'),
    day: key,
    category: data[key].path.split('/')[0]
  })
});

var jsonData = {
  articles: articles
};

fs.writeFile('data.json', JSON.stringify(jsonData ,null, 2), function(err){
  if (err) throw err;
  console.log('It\'s saved!');
})
