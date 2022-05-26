import * as React from 'react';
import {Box} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import { Grid } from '@material-ui/core';

import {useContext} from 'react';
import { StoreContext } from '../store/StoreProvider';
import { types } from '../store/StoreReducer';


function EditConsult(){
   
   //Para obtener el estado global, en este caso la lista de consultas actual
   const [store, dispatch] = useContext(StoreContext);
   const{consultas}=store;
   const{editcon}=store;
   //Para obtener los datos de la fila a mostrar en el formulario de edición
   const {row_edit_con} = store;
  
    //Guardo el dni inicial para hacer la búsqueda del elemento a modificar en la lista
     const num_con_initial= row_edit_con.numero_consulta;
   //Variables iniciales para guardar los valores de los inputs
   const [num_con_value, setNumValue] = React.useState(row_edit_con.numero_consulta);
   const [cod_ser_value, setCodSerValue] = React.useState(row_edit_con.codigo_servicio);
   const [nom_ser_value, setNomSerValue] = React.useState(row_edit_con.nombre_servicio);
   const [pla_value, setPlaValue] = React.useState(row_edit_con.planta);
  
   //Cambio el estado inicial del input correspondiente
   const handleChangeNum = (event) => {
    setNumValue(event.target.value);
   };
   const handleChangeCodSer = (event) => {
    setCodSerValue(event.target.value)
     
   };
   const handleChangeNomSer= (event) => {
    setNomSerValue(event.target.value);
   };
   const handleChangePla = (event) => {
    setPlaValue(event.target.value);
   };
 

   //Editar el elemento de la lista de consultas
   const handleClickSave=()=>{   
   consultas.map(item=>
        {if(item.numero_consulta==num_con_initial)
            {
              item.numero_consulta= num_con_value;
              item.codigo_servicio= cod_ser_value;
              item.nombre_servicio=nom_ser_value;
              item.planta=pla_value;
                         
            }         

        });
      
        //envio la accion en el payload al store reducer para modificar el estado global
        //OJO: ME SIRVE EL MISMO TIPO QUE PARA AÑADIR NUEVOS ITEMS A LA LISTA, PUESTO QUE LA ACCION PARA ESE TIPO ES MODIFICAR EL LISTADO EXISTENTE SUSTITUYENDOLO 
        //CON EL NUEVO LISTADO PASADO
        dispatch({type:types.addsanlistacon,  payload:{consultas:consultas}});

        //Oculto el formulario
        dispatch({type:types.changeeditcon,  payload:{editcon:false}});

 
 }
 const handleClickCancel=()=>{   

        //Oculto el formulario
        dispatch({type:types.changeeditcon,  payload:{editcon:false}});

 }
 
 

   return(

     <div className="container-table">
         <Typography variant="h6">
         Editar consulta seleccionada
       </Typography>
       <Box
         component="form"
        
       >    <Grid className="containter-form-addpatient-inputs-pc" item xs={12}>

            <Grid item xs={2}>
            <TextField value={num_con_value} onChange={handleChangeNum} required id="outlined-basic" label="Número consulta" variant="outlined" />
            </Grid>
            <Grid item xs={2}>
            <TextField  value={cod_ser_value} onChange={handleChangeCodSer} required id="outlined-basic" label="Código servicio" variant="outlined" />
            </Grid>
          
            
            </Grid>
           
            <Grid className="containter-form-addpatient-inputs-pc" item xs={12}>

            <Grid item xs={2}>
            <TextField  value={nom_ser_value} onChange={handleChangeNomSer} id="outlined-basic" label="Nombre servicio" variant="outlined" />
            </Grid>
             <Grid item xs={2}>
             <TextField   value={pla_value} onChange={handleChangePla} id="outlined-basic" label="Planta" variant="outlined" />
             </Grid>
           
             </Grid>

         
             <Grid className="containter-form-addpatient-inputs-movil" item xs={12}>

             <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
             <TextField value={num_con_value} onChange={handleChangeNum} required id="outlined-basic" label="Número consulta" variant="outlined" />
             </Grid>
             <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
             <TextField  value={cod_ser_value} onChange={handleChangeCodSer} required id="outlined-basic" label="Código servicio" variant="outlined" />
             </Grid>
             <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
             <TextField  value={nom_ser_value} onChange={handleChangeNomSer} id="outlined-basic" label="Nombre servicio" variant="outlined" />
             </Grid>

             <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
             <TextField   value={pla_value} onChange={handleChangePla} id="outlined-basic" label="Planta" variant="outlined" />
             </Grid>
           
             </Grid>
             <Grid className="group-button-form" item xs={12}>

              <Grid item xs={5}>
              <div className="button-form">              
              <Button  onClick={handleClickCancel} variant="contained" color="info">Cancelar</Button>
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
export default EditConsult;