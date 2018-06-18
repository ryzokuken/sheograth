const app = require('express')();

app.get('/', (req, res) => {console.log(req.headers.host.split('.')[0])};

app.listen(80, () => console.log('Listening on port 80!'));
