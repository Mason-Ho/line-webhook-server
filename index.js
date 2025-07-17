const express = require('express');
const app = express();

// 當使用者拜訪 localhost:3000 時，顯示 "Hello World"
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('伺服器已啟動 http://localhost:3000');
});
