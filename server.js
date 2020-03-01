const http = require('http');//constante http
const app = require('./app');//constate para usar o arquivo app.js
const port = process.env.PORT || 8000;// porta definida
const server = http.createServer(app); 
server.listen(port);