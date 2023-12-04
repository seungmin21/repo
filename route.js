const express = require('express')
const routing = express();
const path = require('path');

routing.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'index.html');
  res.sendFile(indexPath);
})

module.exports = routing;