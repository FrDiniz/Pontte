const { Status } = require('./../models/status-enum')

const mongoose = require('mongoose')

const { Schema } = mongoose

const ContractSchema = new Schema({
    nome: { type: String, require: true },
    email: { type: String, require: true },
    CPF: { type: String, require: true },
    emprestimo: { type: Number, require: true },
    renda_mensal: { type: Number },
    dt_nasc: { type: Date },
    estado_civil: { type: String},
    endereco: { type: String},

    status: {
        type: Number,
        enum: Object.values(Status),
    },

    imgs: [
        new Schema({
            label: String,
            imagem: String
        })
    ],

}, { collection: 'contract' })

module.exports.ContractSchema = ContractSchema
module.exports.Contract = mongoose.model('Contract', ContractSchema)