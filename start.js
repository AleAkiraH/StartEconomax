const axios = require('axios');

function fazerRequisicao(url) {
    setInterval(() => {
        realizarRequisicao(url);
    }, 1000); // 4 minutos e 30 segundos em milissegundos
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

fazerRequisicao('https://economax.onrender.com/login');
fazerRequisicao('https://economax-dev.onrender.com/login');