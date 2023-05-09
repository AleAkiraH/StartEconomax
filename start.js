const axios = require('axios');

function fazerRequisicao(url) {
    setInterval(() => {
        realizarRequisicao(url);
    }, 4 * 60 * 1000 + 30 * 1000); // 4 minutos e 30 segundos em milissegundos
}

async function realizarRequisicao(url) {
    // Se estiver no ambiente de produção, faz a requisição
    if (process.env.NODE_ENV === 'production') {
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
}

// Verifica se está no ambiente de produção antes de iniciar as requisições
if (process.env.NODE_ENV === 'production') {
    fazerRequisicao('https://economax.onrender.com/login');
    fazerRequisicao('https://economax-dev.onrender.com/login');
}