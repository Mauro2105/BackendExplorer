require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const colors = require('colors');

const port = process.env.PORT;

app.listen(port, () => {
    console.log('El Servidor se esta ejecutando en'.green, `http://localhost:${port}`.cyan)
})