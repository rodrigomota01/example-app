const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    service: 'example-app',
    message: 'Aplicação de exemplo para testar recursos do Backstage',
  });
});

app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`example-app listening on port ${port}`);
});
