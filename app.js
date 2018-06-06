const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!!!!')
})
app.get('/index',function(req,res){
  res.send('this is jzp\'s index')
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})