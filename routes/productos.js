const { Router } = require('express');
const { check } = require('express-validator');

const {} = require('../controllers/productos')
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { esAdminRole } = require('../middlewares/validar-roles');