const {request, response} = require('express');
const bcryptjs = require('bcryptjs');
const Categoria = require('../models/categorias');

const getCategorias = async (req = request, res = response) => {

    const listaCategoria = await Promise.all([
        Categoria.countDocuments(),
        Categoria.find()
    ])

    res.json({
        msg: 'get API categorias',
        listaCategoria
    })
}

const postCategorias = async (req = request, res = response) => {
    
    const {nombre, descripcion} = req.body;
    const categoriaDB = new Categoria({nombre, descripcion});

    await categoriaDB.save();

    res.status(201).json({
        msg: 'Post API de categoria',
        categoriaDB
    })
}

const putCategoria = async (req = request, res = response) => {
    const {id} = req.params;

    const {_id, ...todo} = req.body;

    const categoriaEditada = await Categoria.findByIdAndUpdate(id, todo);

    res.json({
        msg: 'PUT API de usuario',
        categoriaEditada
    });
    
}

const deleteCategoria = async (req = request, res = response) => {
    const {id} = req.params;

    const {_id, ...todo} = req.body;

    const categoriaEditada = await Categoria.findByIdAndDelete(id, todo);

    res.json({
        msg: 'DELETE API de categoria',
        categoriaEditada
    });
}


module.exports = {
    getCategorias,
    postCategorias,
    putCategoria,
    deleteCategoria
}