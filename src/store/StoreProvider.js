import { Store } from "@material-ui/icons";
import {createContext, useReducer} from "react";
import StoreReducer, {initialStore} from "./StoreReducer";

import clientAxios from "../config/axios"; 

//Para proveer el contexto
const StoreContext=createContext();

const StoreProvider = ({children}) =>{
    
  const [store, dispatch] = useReducer(StoreReducer,initialStore)

  //Para actualizar estado global de listados, adición, edición y eliminación de listados luego de conexión a API
  const readListados = async (listar) => {
     // ⬅️
    try {
      if(listar=="Pacientes"){
      const res = await clientAxios.get("/pacientes");
      dispatch({
        type: "READ_PACIENTES",
        payload: res.data,
      });
      }
      else if(listar=="Sanitarios") {
      const res = await clientAxios.get("/sanitarios");
      dispatch({
        type: "READ_SANITARIOS",
        payload: res.data,
      });
      }
      else if(listar=="Personal") {
        const res = await clientAxios.get("/personal");
        dispatch({
          type: "READ_PERSONAL",
          payload: res.data,
        });
        }
        else if(listar=="Consultas") {
          const res = await clientAxios.get("/consultas");
          dispatch({
            type: "READ_CONSULTAS",
            payload: res.data,
          });
          }
          else if(listar=="Departamentos") {
            const res = await clientAxios.get("/departamentos");
            dispatch({
              type: "READ_DEPARTAMENTOS",
              payload: res.data,
            });
            }
    
    } catch (error) {
      console.log(error);
    }
    
  };
  const addListados = async (data,listado) => {
    if(listado=="pacientes"){
      const { dni, nombre, apellidos,telefono,numero_seguridad_social,codigo_historia_clinica } = data;
      try {
        const res = await clientAxios.post("/pacientes",{
          dni, 
          nombre, 
          apellidos,
          telefono,
          numero_seguridad_social,
          codigo_historia_clinica 
        });
        dispatch({
          type: "ADD_PACIENTE",
          payload: res.data,
        });
      } catch (error) {
        console.log( error.res.data);
      }  
    }
    else if(listado=="sanitarios"){
      const { dni, nombre, apellidos,telefono,categoria,especialidad,antiguedad,salario  } = data;
     try {
      const res = await clientAxios.post("/sanitarios",{
        dni, 
        nombre, 
        apellidos,
        telefono,
        categoria,
        especialidad,
        antiguedad,
        salario 
      });
      dispatch({
        type: "ADD_SANITARIO",
        payload: res.data,
      });
    } catch (error) {
      console.log( error.res.data);
    }
  }
  else if(listado=="personal"){
    const { dni,nombre,  apellidos,telefono,codigo_personal, antiguedad, cargo,salario,codigo_dpto, derecho_ascenso}=data;
    try {
     const res = await clientAxios.post("/personal",{
       dni, 
       nombre, 
       apellidos,
       telefono,
       codigo_personal,
       antiguedad,
       cargo,
       salario,
       codigo_dpto,
       derecho_ascenso
     });
     dispatch({
       type: "ADD_PERSONAL",
       payload: res.data,
     });
   } catch (error) {
     console.log( error.res.data);
   }
 }
  else if(listado=="consultas"){
    const { numero_consulta,codigo_servicio,  nombre_servicio,planta}=data;
    try {
    const res = await clientAxios.post("/consultas",{
      numero_consulta, 
      codigo_servicio, 
      nombre_servicio,
      planta
    });
    dispatch({
      type: "ADD_CONSULTA",
      payload: res.data,
    });
  } catch (error) {
    console.log( error.res.data);
  }
  }
  else if(listado=="departamentos"){
    const { codigo_departamento,nombre_departamento}=data;
    try {
     const res = await clientAxios.post("/departamentos",{
      codigo_departamento, 
      nombre_departamento, 
     
     });
     dispatch({
       type: "ADD_DEPARTAMENTO",
       payload: res.data,
     });
   } catch (error) {
     console.log( error.res.data);
   }
  }
  };
  const deleteListados = async (data,list_name) => {  
      try {
      if(list_name=="pacientes"){
      await clientAxios.delete(`/pacientes/${data.id}`);
      }
      else if(list_name=="sanitarios"){
        await clientAxios.delete(`/sanitarios/${data.id}`);
        }
        else if(list_name=="personal"){
          await clientAxios.delete(`/personal/${data.id}`);
          }
          else if(list_name=="consultas"){
            await clientAxios.delete(`/consultas/${data.id}`);
            }
            else if(list_name=="departamentos"){
              console.log("delete depto")
              console.log(data)
              await clientAxios.delete(`/departamentos/${data.id}`);
              }
   
   } catch (error) {
     console.log( error.res.data);
   }
 };
 const editListados = async (data,listado) => {  
      if(listado=="pacientes"){
      const { dni, nombre, apellidos,telefono,numero_seguridad_social,codigo_historia_clinica } = data; 
        try {
        const res= await clientAxios.put(`/pacientes/${data.id}`,
          {
            dni, 
            nombre, 
            apellidos,
            telefono,
            numero_seguridad_social,
            codigo_historia_clinica

          });
      
      } catch (error) {
      console.log( error.res.data);
      }
    }
    else if(listado=="sanitarios"){
      const { dni, nombre, apellidos,telefono,categoria,especialidad,antiguedad,salario  } = data;
      try {
      const res= await clientAxios.put(`/sanitarios/${data.id}`,
        {
          dni, nombre, apellidos,telefono,categoria,especialidad,antiguedad,salario

        });
      
    } catch (error) {
    console.log( error.res.data);
    }
    }
    if(listado=="personal"){
      const { dni,nombre,  apellidos,telefono,codigo_personal, antiguedad, cargo,salario,codigo_dpto, derecho_ascenso}=data;
       try {
       const res= await clientAxios.put(`/personal/${data.id}`,
         {
          dni,nombre, apellidos,telefono,codigo_personal, antiguedad, cargo,salario,codigo_dpto, derecho_ascenso
   
         });
      
     } catch (error) {
     console.log( error.res.data);
     }
    }
    if(listado=="consultas"){
      const { numero_consulta,codigo_servicio,  nombre_servicio,planta}=data;
       try {
       const res= await clientAxios.put(`/consultas/${data.id}`,
         {
          numero_consulta,codigo_servicio,  nombre_servicio,planta
   
         });
      
     } catch (error) {
     console.log( error.res.data);
     }
    }
    if(listado=="departamentos"){
      const { codigo_departamento,nombre_departamento}=data;
       try {
       const res= await clientAxios.put(`/departamentos/${data.id}`,
         {
          codigo_departamento,nombre_departamento
   
         });
      
     } catch (error) {
     console.log( error.res.data);
     }
    }
  };

    return(
        <StoreContext.Provider value={[store, dispatch,readListados,addListados,deleteListados,editListados]}>
            {children}
        </StoreContext.Provider>
    );
}

export {StoreContext};
export default StoreProvider;