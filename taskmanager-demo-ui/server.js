const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const proxy = require('express-http-proxy');
const cors = require('cors');

const app = express();


app.use(bodyParser.json({limit: '25mb'}));
app.use(bodyParser.urlencoded({ extended: false, limit: '25mb' }));

app.use(cors());


app.use(express.static(path.join(__dirname, 'dist/taskmanager-demo-ui')));


app.use('/server', proxy('http://localhost:8080'));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/taskmanager-demo-ui/index.html'));
});


 const port = '4200';
app.set('port', port);

const server = http.createServer(app);


server.listen(port, () => console.log(`Task app is listening on ${port}!`));
