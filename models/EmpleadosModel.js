// import connection

import db from "../config/database.js";
  
// Get All Empleados
export const getEmpleados = (result) => {
    db.query("SELECT * FROM tblempleados e", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Insert Empleado to Database
export const insertEmpleado = (data, result) => {
    
    db.query("INSERT INTO `tblempleados`(`TipoDocumento`, `Documento`, `Nombres`, `Apellidos`, `Direccion`, `Telefono`) values ("+ "'"+data.TipoDoc+ "'" +","+ "'"+data.Documento+ "'"  + ","+ "'"+data.Nombres+ "'"  +","+ "'"+data.Apellidos+ "'"  + ","+"'"+data.Direccion+ "'"  +","+"'"+data.Telefono+ "'" +")", [data], (err, results) => {                         
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, "1");
        }
    });   
}

// Get All Areas
export const getAreas = (result) => {
    db.query("SELECT * FROM `tblareas`", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}


// Get SubArea by ID area
export const getSubAreas = (data,result) => {
   
    db.query("SELECT * FROM `tblsubareas` WHERE IdArea = "+ "'"+data.IdSubArea+ "'"+ "order by NombreSubArea" , [data], (err, results) => {             
        if(err) {
            console.log("Error:" + err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}





// Get All Empleados
export const getEmpleadoID = (id,result) => {
    db.query("SELECT e.TipoDocumento,e.Documento,e.Nombres,e.Apellidos,e.Area as Areas,e.SubArea as IdSAreas, a.NombreArea,sas.NombreSubArea FROM tblempleados as e,tblareas as a,tblsubareas sas WHERE e.Area = a.IdArea and e.SubArea =sas.IdSubArea and e.Documento ="+ "'"+id+ "'", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single Empleados
export const getEmpleadoById = (id, result) => {
    db.query("SELECT e.TipoDocumento,e.Documento,e.Nombres,e.Apellidos,e.Area as Areas,e.SubArea as IdSAreas, a.NombreArea,sas.NombreSubArea FROM tblempleados as e,tblareas as a,tblsubareas sas WHERE e.Area = a.IdArea and e.SubArea =sas.IdSubArea and e.Documento ="+ "'"+id+ "'", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            console.log(results[0]);
            result(null, results[0]);
        }
    });   
}

// Update Empleado
export const updateEmpleadoById = (data, id, result) => {
    db.query("UPDATE tblempleados SET TipoDocumento = " + "'"+data.TipoDoc+ "'" +",Documento ="+"'"+data.Documento+ "'"+",Nombres ="+"'"+data.Nombres+ "'"+",Apellidos ="+"'"+data.Apellidos+ "'"+ ",Direccion ="+"'"+data.Direccion+ "'"+ ",Telefono ="+"'"+data.Telefono+ "'" + " WHERE Documento ="+"'"+id+ "'", [data.TipoDocumento, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}


// Delete Empleado
export function deleteEmpleadoById(data, id, result) {
    db.query("DELETE FROM tblempleados WHERE Documento =" + "'" + id + "'", [data.TipoDocumento, id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}



