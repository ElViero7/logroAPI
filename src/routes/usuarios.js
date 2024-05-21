const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

// Obtener todos los usuarios
router.get('/', usuariosController.obtenerTodosLosUsuarios);

// Crear un nuevo usuario
router.post('/', usuariosController.crearUsuario);

// Obtener un usuario por ID
router.get('/:id', usuariosController.obtenerUsuarioPorId);

// Actualizar un usuario por ID
router.put('/:id', usuariosController.actualizarUsuario);

// Eliminar un usuario por ID
router.delete('/:id', usuariosController.eliminarUsuario);

module.exports = router;
