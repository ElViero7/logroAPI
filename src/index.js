const express = require('express');
const sequelize = require('./config/database');
const rutas = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', rutas);

sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Servidor escuchando en http://localhost:${port}`);
    });
  })
  .catch(error => {
    console.error('Error al sincronizar con la base de datos:', error);
  });
