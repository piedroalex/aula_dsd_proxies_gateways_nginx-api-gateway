const express = require('express');
const app = express();
const PORT = 8080;

app.get('/professores', (req, res) => {
    res.json([
        { id: 1, nome: 'Pedro Alex' },
        { id: 2, nome: 'Henrique' },
        { id: 3, nome: 'Athos' }
    ]);
});

app.listen(PORT, () => {
    console.log(`Serviço rodando na porta ${PORT}`);
});