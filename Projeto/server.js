//REQUISIÇÃO DOS MÓDULOS:

/*Express*/const express = require('express');
/*Express*/const app = express()

//ROTAS 
//Express.static: entrega arquivos estáticos da pasta client

app.use('/cliente', express.static('client'))


app.listen(8083, function(){
    console.log("Servidor rodando na URL http://localhost:8083, acesse a URL http://localhost:8083/cliente para ter acesso ao projeto")
})
