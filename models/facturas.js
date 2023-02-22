const {Schema, model} = require('mongoose');
const usuario = require('./usuario');

const FacturaSchema = Schema({
    producto:{
        type: Schema.Types.ObjectId,
        ref : 'Usuario',
        required : true
    },
    cantidad:{
        type: Number,
        require: [true, 'La cantidad es un campo obligatorio']
    },
    usuario:{
        type: Schema.Types.ObjectId,
        ref : 'Usuario',
        required : true
    }
})

module.exports = {
    FacturaSchema
}