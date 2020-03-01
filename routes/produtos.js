const express =  require('express');
const router = express.Router();

//retorna todos os produtos
router.get('/',(req,res,next) => {
    res.status(200).send({
        mensagem: "Retorna todos os produtos"
    });
});

//insere um produto
router.post('/',(req,res,next) => {
   const produto = {
       nome: req.body.nome,
       preco: req.body.preco

   }
   
    res.status(201).send({
        mensagem: "Insere um produto",
        produtoCriado: produto
    })
});

//retorna os dados de um produto
router.get('/:id_produto',(req,res,next) => {
  const id = req.params.id_produto

  if(id === 'especial'){
    
    res.status(200).send({
        mensagem: "Você descobriu o id especial S2S2",
        id:id
    });
  }else{
      res.status(200).send({
          mensagem: "você passou um ID"
      })
  }
    
})

//altera um produto
router.patch('/',(req,res,next) => {
    res.status(201).send({
        mensagem: "Usando o PATCH dentro da rota de produtos"
    })
});

//exclui um produto
router.delete('/',(req,res,next) => {
    res.status(201).send({
        mensagem: "Produto excluido"
    })
});


module.exports = router;