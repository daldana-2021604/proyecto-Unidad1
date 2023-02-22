const {Schema, model} = require('mongoose');

const ProductoSchema = Schema({
    nombre:{
        type: String,
        require: [true, 'El nombre es un campo obligatorio']
    },
    marca:{
        type: String,
        require: [true, 'La marca es un campo obligatorio']
    },
    categoria:{
        type: Schema.Types.ObjectId,
        ref : 'Categoria',
        required : true,
        default: 'PRODUCTOS_SIN_CATEGORIA_ESPECIFICA'
    },
    stock:{
        type: Number,
        require: [true, 'El stock es un campo obligatorio']
    },
    vendidos:{
        type: Number,
        default: 0
    },
    precio: {
        type : Number,
        require : true
    }
})

module.exports = model('Producto', ProductoSchema)