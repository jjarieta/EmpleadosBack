// import express
import express from "express";
  
// import functions from controller--> EmpleadosController
import { showEmpleado,CreateEmpleado,showAreas,showSubAreas,showEmpleadoEdit,updateEmpleado,deleteEmpleado} from "../controllers/EmpleadosController.js";

  
// init express router
const router = express.Router();
  
// Get All Empleados
router.get('/empleados', showEmpleado);

// Create  Empleados
router.post('/empleados', CreateEmpleado);
  
// Get All Areas
router.get('/areas', showAreas);

// Get All Areas
router.post('/subareas', showSubAreas);

// Get Empleado by ID
router.post('/editarempleado', showEmpleadoEdit);

// update Empleado 
router.put('/actualizarempleado/:id', updateEmpleado);

router.delete('/delete/:id', deleteEmpleado);

  
// export default router
export default router;