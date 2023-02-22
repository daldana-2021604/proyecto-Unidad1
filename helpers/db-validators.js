const Usuario = require('../models/usuario');
const Role = require('../models/role');

//Calidamos en contrl de la db si ese correo ya existe
const emailExiste = async(correo = '') => {
    //Verificar si el correo existe
    const existeEmailDeUsuario = await Usuario.findOne({correo});
    /*if (existeEmailDeUsuario === true) {
        
    }*/

    if (existeEmailDeUsuario) {
        throw new Error(`El correo ${correo}, ya existe en la DB`)
    }
}

const esRolValido = async(rol = '') =>{
    //Verificar si el rol es valido y existe en la DB
    const existeRolDB = await Role.findOne({rol});
    if (!existeRolDB) {
        throw new Error(`El rol ${rol}, no existe en la DB`)
    }
}

const existeUsuarioPorId = async(id) =>{
    //verificar si existe el ID
    const existIdOfUser = await Usuario.findById({id})
    if (!existIdOfUser) {
        throw new Error(`El id ${id}, no existe en la DB`)
    }
}

module.exports = {
    emailExiste,
    esRolValido,
    existeUsuarioPorId
}