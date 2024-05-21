const { Sequelize } = require('sequelize');

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize('udl', 'root', 'Edf9PlKgJbICA9VE', {
  host: 'localhost',
  dialect: 'mysql',
});

// Verificar la conexión
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

module.exports = sequelize;
