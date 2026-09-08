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

const pool = require('./config/postgres');

// Rota temporária só para testar a conexão
app.get('/api/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ success: true, horaDoBanco: result.rows[0].now });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});
// Fim teste

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});