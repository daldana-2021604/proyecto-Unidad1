const { Schema, model } = require('mongoose');

const ProductoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del la categoria es obligatorio'],
        unique: true
    },
    estado: {
        type: Boolean,
        default : true,
        required: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref : 'Usuario',
        required : true
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria'
    }
});

module.exports = model('Producto', ProductoSchema);