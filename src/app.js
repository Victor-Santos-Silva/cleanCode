require('dotenv').config(); // Arquivo => .env
const express = require('express');
const { sequelize } = require('./models');

const app = express(); // Iniciando servidor

app.use(express.json()); // Resposta via JSON
// process.env ? PORT : 3000

sequelize.authenticate()
    .then(() => {
        console.log("Conexao com o banco de dados deu certo.");
    })
    .catch(err => {
        console.log("Erro ao conectar no banco: ", err);
    })


const PORT = process.env.PORT || 3000;
// Listen -> Ouvir
// Ouvindo no possivel o na porta 3000
app.listen(PORT, () => {
    console.log('---------------------------');
    console.log(`Runnig on http://${PORT}`);
    console.log('---------------------------');
});
