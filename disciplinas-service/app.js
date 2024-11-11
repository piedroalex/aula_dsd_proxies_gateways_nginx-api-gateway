const express = require('express');
const app = express();
const PORT = 8081;

app.get('/disciplinas', (req, res) => {
    res.json([
        { id: 1, nome: 'Desenvolvimento de Sistemas Distribuídos' },
        { id: 2, nome: 'Linguagem de Programação de Banco de Dados' },
        { id: 3, nome: 'Programação de Computadores' }
    ]);
});

app.listen(PORT, () => {
    console.log(`Serviço rodando na porta ${PORT}`);
});