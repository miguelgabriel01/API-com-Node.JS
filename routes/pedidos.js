const express =  require('express');
const router = express.Router();


//retorna todos s pedidos
router.get('/',(req,res,next) => {
    res.status(200).send({
        mensagem: "Retorna os pedidos"
    });
});

//insere um pedido
router.post('/',(req,res,next) => {
    res.status(201).send({
        mensagem: "O pedido foi criado"
    })
});

//retorna os dados de um pedido
router.get('/:id_pedido',(req,res,next) => {
  const id = req.params.id_pedido

    res.status(200).send({
        mensagem: "VDetalhes do pedido",
        id_pedido:id
    });
  
    
})

router.patch('/',(req,res,next) => {
    res.status(201).send({
        mensagem: "Usando o PATCH dentro da rota de pedidos"
    })
});

//exclui um pedido
router.delete('/',(req,res,next) => {
    res.status(201).send({
        mensagem: "Pedido excluido"
    })
});


module.exports = router;