require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// Rotas da API entram aqui (próxima etapa)
// app.use('/api', require('./routes'));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});