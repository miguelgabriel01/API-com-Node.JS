const express = require('express');//faço a requisição do express
const app = express();// faço uma constate que chama o express
const morgan = require('morgan');
const bodyparser = require('body-parser');

const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json())

app.use((req,res,next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
      'Access-Control-Allow-Header',
      'Origin,X-Requested-With,Content-Type,Accept,Authorization',

    );

    if(req.method == 'OPTIONS'){
        Res.header('Access-control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
        return res.status(200).send({
             
        })
    }

    next();
});

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

//quando não encontra uma rota expecifica
app.use((req,res,next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);

})

app.use((error,req,res,next) => {
    res.status(error.status || 500);
    return res.send({
        erro:{
            mensagem: error.message
        }
    })
})
//exporto este arquivo
module.exports = app;