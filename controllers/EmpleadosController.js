// Import functions from Empleado Model
import { getEmpleados,insertEmpleado,getAreas,getSubAreas,getEmpleadoById,updateEmpleadoById,deleteEmpleadoById } from "../models/EmpleadosModel.js";



// Get Empleados
export const showEmpleado = (req, res) => {
    getEmpleados((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Create New empleados
export const CreateEmpleado = (req, res) => {
    const data = req.body;
    console.log(data);
    insertEmpleado(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Get Areas
export const showAreas = (req, res) => {
    
    getAreas((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Get Sub-Areas
export const showSubAreas = (req, res) => {
    
    const data = req.body;
    console.log(data);
    getSubAreas(data,(err, results) => {
        if (err){
            console.log(err);
            res.send(err);

        }else{
            res.json(results);
        }
    });
}
export const showEmpleadoEdit = (req, res) => {
    const data = req.body;
   // console.log(data);
  
    getEmpleadoById(req.body.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Update EmpleadoById
export const updateEmpleado = (req, res) => {

    const data  = req.body;
    const id    = req.params.id;
    console.log(data);
    console.log(id);
    updateEmpleadoById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// DELETE EmpleadoById
export const deleteEmpleado = (req, res) => {

    const data  = req.body;
    const id    = req.params.id;
    console.log(data);
    console.log(id);
    deleteEmpleadoById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}



