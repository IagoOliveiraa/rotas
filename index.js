//Express lib
const express = require('express');
//Função do express
const app = express();
//Caminho relativo
const path = require('path');
//Criando rotas
const router = express.Router();

//arquivos estaticos
app.use(express.static(path.join(__dirname, '/css')));

//Criando função da rota
router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'))//__dirname(caminho alternativo)
    console.log(__dirname)
    console.log("index")
});

//Criando outra rota
router.get('/sobre', function(req,res) {
    console.log("Sobre");
    res.sendFile(path.join(__dirname+''))
})

app.use('/',router);
app.listen(process.env.port || 3000);

//rota3
router.get('/pagina2.html', function(req,res){
    console.log('pagina2')
    res.sendFile(path.join(__dirname+'/pagina2.html'))
})  

router.get(' ', function(req,res){
    console.log('pagina2')
    res.sendFile(path.join(__dirname+'/pagina3.html'))
})  


console.log("Server on!!")