const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/user', (req, res) => {
  const username = req.headers['x-iisnode-auth_user'] || req.headers['remote_user'] || 'guest';
  res.json({ username });
});

app.listen(3001, () => {
  console.log('Backend running on http://localhost:3001');
});
