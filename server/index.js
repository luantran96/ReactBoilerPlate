const express = require('express');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.static(path.join(__dirname, '../dist/')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/app.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

