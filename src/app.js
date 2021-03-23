const path = require('path');
const express = require('express');
const app = express();

const pathname = path.join(__dirname, '../public');
app.use(express.static(pathname));

const port = process.env.PORT || 8000;
app.get('/', (req, res) => {
  res.status(200).send('Hello Frome Homepage');
});
app.get('/about', (req, res) => {
  res.status(200).send('Heloo Frome about us page');
});
app.get('*', (req, res) => {
  res.status(404).send('Ops Page not found');
});

app.listen(port, () => {
  console.log(`Listning frome port Number ${port}`);
});
