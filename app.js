const express = require('express')
const app = express();
const path = require('path');
const port = 3030;

app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'index.html');
  res.sendFile(indexPath);
})

app.listen(port, () => {
  console.log(`서버 http://localhost:${port}가 가동 중입니다.`)
});

//app.listen(port, () => {
//  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
//});