const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String},
    completado: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Task', TaskSchema);
