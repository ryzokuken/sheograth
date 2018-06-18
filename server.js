const app = require('express')();

app.get('/', (req, res) => {
  console.log(req.headers.host.split('.')[0]);
  res.send(req.headers.host);
});

app.listen(80, () => console.log('Listening on port 80!'));
