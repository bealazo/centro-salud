import * as React from 'react';
import {Box} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import { Grid } from '@material-ui/core';

import {useContext} from 'react';
import { StoreContext } from '../store/StoreProvider';
import { types } from '../store/StoreReducer';

//Tipado
import Departamento from "../interfaces/Departamento";

const EditDepartment=()=>{
   
    //Para obtener el estado global, en este caso la lista de departamentos actual
    const [store, dispatch] = useContext(StoreContext);
    const departamentos:Departamento[]=store.departamentos;
    
    //Para obtener los datos de la fila a mostrar en el formulario de edición
    const row_edit_dep:Departamento = store.row_edit_dep;
   
     //Guardo el dni inicial para hacer la búsqueda del elemento a modificar en la lista
      const cod_dep_initial= row_edit_dep.codigo_departamento;
    //Variables iniciales para guardar los valores de los inputs
    const [cod_dep_value, setCodDepValue] = React.useState(row_edit_dep.codigo_departamento);
    const [nom_dep_value, setNomDepValue] = React.useState(row_edit_dep.nombre_departamento);
   
    //Cambio el estado inicial del input correspondiente
    const handleChangeCod=(event:React.ChangeEvent):void => {
      let target = event.target as HTMLInputElement;
      setCodDepValue(Number(target.value));
    };
    const handleChangeNom = (event:React.ChangeEvent):void => {
      let target = event.target as HTMLInputElement;
      setNomDepValue(target.value);
    };
     
 
 
    //Editar el elemento de la lista de departamentos
    const handleClickSave=():void=>{   
    departamentos.map(item=>
         {if(item.codigo_departamento==cod_dep_initial)
             {
               item.codigo_departamento= cod_dep_value;
               item.nombre_departamento= nom_dep_value;
             
             }         
 
         });
       
         //envio la accion en el payload al store reducer para modificar el estado global
         //OJO: ME SIRVE EL MISMO TIPO QUE PARA AÑADIR NUEVOS ITEMS A LA LISTA, PUESTO QUE LA ACCION PARA ESE TIPO ES MODIFICAR EL LISTADO EXISTENTE SUSTITUYENDOLO 
         //CON EL NUEVO LISTADO PASADO
         dispatch({type:types.addsanlistadep,  payload:{departamentos:departamentos}});
 
         //Oculto el formulario
         dispatch({type:types.changeeditdep,  payload:{editdep:false}});
 
  
  }
  const handleClickCancel=():void=>{   
 
         //Oculto el formulario
         dispatch({type:types.changeeditdep,  payload:{editdep:false}});
 
  }
  
  
 
    return(
 
      <div className="container-table">
          <Typography variant="h6">
          Editar departamento seleccionado
        </Typography>
        <Box
          component="form"
         
        >    <Grid className="containter-form-addpatient-inputs-pc" item xs={12}>
 
             <Grid item xs={2}>
             <TextField value={cod_dep_value} type="number" onChange={handleChangeCod} required id="outlined-basic" label="Código departamento" variant="outlined" />
             </Grid>
             <Grid item xs={2}>
             <TextField  value={nom_dep_value} onChange={handleChangeNom} required id="outlined-basic" label="Nombre departamento" variant="outlined" />
             </Grid>
           
             
             </Grid>
            
                     
              <Grid className="containter-form-addpatient-inputs-movil" item xs={12}>
 
              <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
              <TextField value={cod_dep_value} type="number" onChange={handleChangeCod} required id="outlined-basic" label="Código departamento" variant="outlined" />
              </Grid>
              <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
              <TextField  value={nom_dep_value} onChange={handleChangeNom} required id="outlined-basic" label="Nombre departamento" variant="outlined" />
              </Grid>
                        
              </Grid>
              <Grid className="group-button-form" item xs={12}>
 
               <Grid item xs={5}>
               <div className="button-form">              
               <Button  onClick={handleClickCancel} variant="contained" color="inherit">Cancelar</Button>
               </div>
               </Grid>
               <Grid item xs={5}>
               <div  className="button-form">    
               <Button  onClick={handleClickSave} variant="contained" color="primary">Guardar</Button>    
           
               </div>
               </Grid>
              
               </Grid>
 
            
      </Box>
     </div>
    );
 }
export default EditDepartment;