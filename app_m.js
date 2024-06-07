const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/main/index.html'));
});

router.get('/page1',function(req,res){
  res.sendFile(path.join(__dirname+'/pages/page1.html'));
});

router.get('/page2',function(req,res){
  res.sendFile(path.join(__dirname+'/pages/page2.html'));
});

app.use('/', router);
app.use(express.static(__dirname + '/public'));
app.use('/node_modules/@dotlottie', express.static(__dirname + '/node_modules/@dotlottie'));
app.listen(process.env.port || 8084);
 
console.log('Running at Port 8084');