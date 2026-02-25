// Script untuk aplikasi web
const express = require('express');
const app = express();

app.get('/track', (req, res) => {
  // Logik untuk melacak status read WhatsApp
  // ...
});

app.listen(3000, () => {
  console.log('Aplikasi web berjalan di port 3000');
});
