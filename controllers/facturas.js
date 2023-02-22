const {request, response} = require('express');
const Factura = require('../models/productos');

const getFacturas = async(req = request, res = response) =>{
    const listaFactura = await Promise.all([
        Factura.countDocuments(),
        Factura.find()
    ])

    res.json({
        msg: 'get API productos',
        listaProductos: listaFactura
    })
}

const postFactura = async(req = request, res = response) =>{

    const{producto, cantidad, precio} = req.body;
    const productoDB = new Factura({nombre, marca, categoria, stock, vendidos});

    await productoDB.save();

    res.status(201).json({
        msg: 'Post API de producto',
        productoDB
    })
}

const putFactura = async(req = request, res = response) =>{
    const {id} = req.params;

    const {_id, ...todo} = req.body;

    const productoEditado = await Factura.findByIdAndUpdate(id, todo);

    res.json({
        msg: 'PUT API de usuario',
        productoEditado
    });
}

const deleteFactura = async(req = request, res = response) =>{
    const {id} = req.params;

    const {_id, ...todo} = req.body;

    const productoEliminado = await Factura.findByIdAndDelete(id, todo);

    res.json({
        msg: 'Delete API de usuario',
        productoEliminado
    });
}


module.exports = {
    getFacturas,
    postFactura,
    putFactura,
    deleteFactura
}