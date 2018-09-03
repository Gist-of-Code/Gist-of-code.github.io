const express = require('express')
const path = require('path')
var app = express()
const PORT = process.env.PORT || 80
express()
app.use(express.static(path.join(__dirname, 'public')))
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/views/index.html'));
});
app.get('/CodeArticles',function(req,res){
  res.sendFile(path.join(__dirname+'/public/views/codearticles.html'))
});
app.get('/CodeTutorials',function(req,res){
  res.sendFile(path.join(__dirname+'/public/views/codetutorials.html'))
});
app.get('/styling/main.css',function(req,res){
  res.sendFile(path.join(__dirname+'/public/styling/main.css'))
});
app.get('/javascript/gtag.js',function(req,res){
  res.sendFile(path.join(__dirname+'/scripts/javascript/gtag.js'))
})
app.get('analytics.js',function(req,res){
  res.sendFile(path.join(__dirname+'/scripts/javascript/autotrack.js'))
});
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
