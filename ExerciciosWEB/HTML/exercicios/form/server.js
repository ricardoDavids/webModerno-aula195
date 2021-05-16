const express = require('express') // Aqui vou importar o express, penso ter alguma coisa haver com bd

const app = express()// Aqui vou instanciar o express

/*// Aqui tambem vou fazer o import;

O que o bodyParser vai fazer é : uma vez que eu submeto os dados do meu formulario,
ele vai fazer analise no corpo da requesição, vai pegar esses dados e lançar dentro 
do request.body, ou seja, quando acessar ao request.body irei ter acesso a todos os
dados dentro do formulario submetidos;
*/
const bodyParser = require('body-parser')




/* urlencoded --> é o padrão quando vc submete um formulario, 
é o padrao que vem apartir da sumbissao por isso ele precisa de fazer o parser do urlencoded.

 */

app.use(bodyParser.urlencoded({ extended: true}))


//Agora irei precisar de atender ás URL, no caso vou ter uma req do tipo POST

app.post('/usuarios', (req,resp) =>{
    console.log(req.body) /*Aqui é para saber o que chegou no corpo da req;
    Imprime no console do lado do servidor, no back-end que está rodando no "server.js", ou seja, imprimiu o que vem no body.  */
    resp.send('<h1>Parabens</h1>') // Quando no formulario clicar para submeter eu vou mandar uma msg de Parabéns

})

app.listen(3003)