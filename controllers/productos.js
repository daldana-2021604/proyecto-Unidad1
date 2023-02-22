const {request, response} = require('express');
const Producto = require('../models/productos');

const getProductos = async(req = request, res = response) =>{
    const listaProductos = await Promise.all([
        Producto.countDocuments(),
        Producto.find()
    ])

    res.json({
        msg: 'get API productos',
        listaProductos
    })
}

const postProducto = async(req = request, res = response) =>{

    const{nombre, marca, categoria, stock, vendidos} = req.body;
    const productoDB = new Producto({nombre, marca, categoria, stock, vendidos});

    await productoDB.save();

    res.status(201).json({
        msg: 'Post API de producto',
        productoDB
    })
}

const putProducto = async(req = request, res = response) =>{
    const {id} = req.params;

    const {_id, ...todo} = req.body;

    const productoEditado = await Producto.findByIdAndUpdate(id, todo);

    res.json({
        msg: 'PUT API de usuario',
        productoEditado
    });
}

const deleteProducto = async(req = request, res = response) =>{
    const {id} = req.params;

    const {_id, ...todo} = req.body;

    const productoEliminado = await Producto.findByIdAndDelete(id, todo);

    res.json({
        msg: 'Delete API de usuario',
        productoEliminado
    });
}


module.exports = {
    getProductos,
    postProducto,
    putProducto,
    deleteProducto
}