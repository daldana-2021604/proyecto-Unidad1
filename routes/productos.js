const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth');
const { obtenerCategorias, obtenerCategoriasPorId, elimiarCategoria, actualizarCategorias, crearCategorias, eliminarCategoria } = require('../controllers/categoria');
const { obtenerProductos, obtenerProductoPorId, crearProducto, actualizarProducto, eliminarProducto } = require('../controllers/producto');
const { esRoleValido, existeCategoriaPorId, existeProductoPorId } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { esAdminRole } = require('../middlewares/validar-roles');

const router = Router();


//Obtener todos los productos - publico
router.get('/', obtenerProductos);

//Obtener un producto por el id - publico
router.get('/:id',[
    check('id').custom( existeProductoPorId ),
    check('id', 'No es un id de mongo valido').isMongoId(),
    validarCampos
], obtenerProductoPorId);

//Crear producto - privado - cualquier persona con un token valido
router.post('/crear',[
    validarJWT,
    check('nombre', 'El nombre del producto es obligatorio').not().isEmpty(),
    validarCampos
], crearProducto);

//Actualizar producto - privado- se requiere id y un token valido
router.put('/editar/:id',[
    validarJWT,
    check('id', 'No es un id de mongo valido').isMongoId(),
    check('id').custom( existeProductoPorId ),
    check('nombre', 'El nombre del producto es obligatorio').not().isEmpty(),
    validarCampos
], actualizarProducto);

//Borrar un producto - privado - se requiere id y un token valido - solo el admin puede borrar
router.delete('/eliminar/:id',[
    validarJWT,
    esAdminRole,
    check('id', 'No es un id de mongo valido').isMongoId(),
    check('id').custom( existeProductoPorId ),
    check('nombre', 'El nombre del producto es obligatorio').not().isEmpty(),
    validarCampos
], eliminarProducto);


module.exports = router;
