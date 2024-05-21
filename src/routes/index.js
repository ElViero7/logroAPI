const express = require('express');
const router = express.Router();
const usuariosRoutes = require('./usuarios');

router.use('/usuarios', usuariosRoutes);

module.exports = router;
