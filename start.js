const axios = require('axios');
const express = require('express');

// Defina a variável quantidade
let quantidade = 12;

function fazerRequisicao(url) {
    realizarRequisicao(url); // Executa imediatamente
    setInterval(() => {
        realizarRequisicao(url);
    }, 4 * 60 * 1000 + 30 * 1000); // 4 minutos e 30 segundos em milissegundos
}

async function realizarRequisicao(url) {
    try {
        const data = {
            usuario: 'aleakirah',
            senha: '14191712'
        };

        const response = await axios.post(url, data);

        if (response.status === 200) {
            console.log(`Requisição bem-sucedida! (${url})`);
            const horario = new Date().toISOString();
            console.log(`Requisição feita às ${horario}`);
        } else {
            console.log(`Erro na requisição. (${url})`);
            const horario = new Date().toISOString();
            console.log(`Requisição feita às ${horario}`);
        }
    } catch (error) {
        console.log(`Erro na requisição. (${url})`);
        const horario = new Date().toISOString();
        console.log(`Requisição feita às ${horario}`);
    }
}

// Crie uma instância do Express
const app = express();

// Defina a rota para GET
app.get('/', (req, res) => {
    res.send(`Quantidade: ${quantidade}`);
});

// Inicie o servidor Express
app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});

fazerRequisicao('https://economax.onrender.com/login');
fazerRequisicao('https://economax-dev.onrender.com/login');