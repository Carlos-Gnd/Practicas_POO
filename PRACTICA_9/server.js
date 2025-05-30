const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Conectado a MongoDB');
})
.catch(err => {
    console.error('Error al conectar MongoDB:', err);
});

app.get('/', (req, res) => {
    res.send('API funcionando');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});