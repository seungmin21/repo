const express = require('express')
const app = express();
const path = require('path');
const port = 3030;
const routing = require('./route');

app.use('/', routing)
app.use(express.static(path.join(__dirname, 'public')));

// 서버 열기가 안되는 사례
//app.listen(port, () => {
//  console.log(`서버 http://localhost:${port}가 가동 중입니다.`)
//});

// 서버 열기가 되는 사례
app.listen(port, () => {
  console.log(`서버 http://localhost:${port} 가 가동 중입니다.`)
});