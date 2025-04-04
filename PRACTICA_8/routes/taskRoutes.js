const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Obtener todas las tareas
router.get('/', async (req, res) => {
    try {
        const tareas = await Task.find();
        res.json(tareas);
    } catch (error) {
        console.error('Error al obtener tareas:', error);
        res.status(500).json({ mensaje: 'Error al obtener tareas' });
    }
});

// Crear una nueva tarea
router.post('/', async (req, res) => {
    try {
        const tarea = new Task(req.body);
        await tarea.save();
        res.status(201).json(tarea);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    
});

// Actualizar una tarea
router.put("/:id", async (req, res) => {
    try {
        const tarea = await Task.findByIdAndUpdate(res.params.id, req.body, { new: true });
        if (!tarea) {
            return res.status(404).json({ mensaje: "Tarea no encontrada" });
            res.json(tarea);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Eliminar una tarea
router.delete("/:id", async (req, res) => {
    try {
        const tarea = await Task.findByIdAndDelete(req.params.id);
        if (!tarea) {
            return res.status(404).json({ mensaje: "Tarea no encontrada" });
        }
        res.json({ mensaje: "Tarea eliminada" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;