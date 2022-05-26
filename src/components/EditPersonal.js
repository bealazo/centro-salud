import * as React from 'react';
import {Box} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import { Grid } from '@material-ui/core';

import {useContext} from 'react';
import { StoreContext } from '../store/StoreProvider';
import { types } from '../store/StoreReducer';


function EditPersonal(){
   
   //Para obtener el estado global, en este caso la lista de personal actual
   const [store, dispatch] = useContext(StoreContext);
   const{personal}=store;
   const{editper}=store;
   //Para obtener los datos de la fila a mostrar en el formulario de edición
   const {row_edit_per} = store;
  
    //Guardo el dni inicial para hacer la búsqueda del elemento a modificar en la lista
     const dni_initial= row_edit_per.dni;
   //Variables iniciales para guardar los valores de los inputs
   const [dni_value, setDniValue] = React.useState(row_edit_per.dni);
   const [name_value, setNameValue] = React.useState(row_edit_per.nombre);
   const [phone_value, setPhoneValue] = React.useState(row_edit_per.telefono);
   const [lastname_value, setLastNameValue] = React.useState(row_edit_per.apellidos);
   const [cod_per_value, setCodPerValue] = React.useState(row_edit_per.codigo_personal);
   const [car_value, setCarValue] = React.useState(row_edit_per.cargo);
   const [ant_value, setAntValue] = React.useState(row_edit_per.antiguedad);
   const [sal_value, setSalValue] = React.useState(row_edit_per.salario);
   const [cod_dpto_value, setCodDptoValue] = React.useState(row_edit_per.codigo_dpto);
   const [der_value, setDerValue] = React.useState(row_edit_per.derecho_ascenso);
 
   //Cambio el estado inicial del input correspondiente
   const handleChangeDni = (event) => {
     setDniValue(event.target.value);
   };
   const handleChangeName = (event) => {
       setNameValue(event.target.value)
  
   };
   const handleChangeLastname = (event) => {
   setLastNameValue(event.target.value);
   };
   const handleChangePhone = (event) => {
    setPhoneValue(event.target.value);
   };
   const handleChangeCodPer = (event) => {
    setCodPerValue(event.target.value);
   };
   const handleChangeCar = (event) => {
    setCarValue(event.target.value);
   };
   const handleChangeAnt = (event) => {
    setAntValue(event.target.value);
  };
  const handleChangeSal = (event) => {
    setSalValue(event.target.value);
  };
  const handleChangeCodDpto = (event) => {
    setCodDptoValue(event.target.value);
  };
  const handleChangeDer = (event) => {
    setDerValue(event.target.value);
  };

   //Editar el elemento de la lista de personal
   const handleClickSave=()=>{   
   personal.map(item=>
        {if(item.dni==dni_initial)
            {
               item.dni= dni_value;
              item.nombre= name_value;
              item.apellidos=lastname_value;
              item.telefono=phone_value;
              item.codigo_personal=cod_per_value;
              item.cargo=car_value;
              item.antiguedad=ant_value;
              item.salario=sal_value;
              item.codigo_dpto=cod_dpto_value;
              item.derecho_ascenso=der_value;
              
            }         

        });
    
        //envio la accion en el payload al store reducer para modificar el estado global
        //OJO: ME SIRVE EL MISMO TIPO QUE PARA AÑADIR NUEVOS ITEMS A LA LISTA, PUESTO QUE LA ACCION PARA ESE TIPO ES MODIFICAR EL LISTADO EXISTENTE SUSTITUYENDOLO 
        //CON EL NUEVO LISTADO PASADO
        dispatch({type:types.addsanlistaper,  payload:{personal:personal}});

        //Oculto el formulario
        dispatch({type:types.changeeditper,  payload:{editper:false}});

 
 }
 const handleClickCancel=()=>{   

        //Oculto el formulario
        dispatch({type:types.changeeditper,  payload:{editper:false}});

 }
 
 

   return(

     <div className="container-table">
         <Typography variant="h6">
         Editar personal seleccionado
       </Typography>
       <Box
         component="form"
        
       >    <Grid className="containter-form-addpatient-inputs-pc" item xs={12}>

            <Grid item xs={2}>
            <TextField value={dni_value} onChange={handleChangeDni} required id="outlined-basic" label="Dni" variant="outlined" />
            </Grid>
            <Grid item xs={2}>
            <TextField  value={name_value} onChange={handleChangeName} required id="outlined-basic" variant="outlined" />
            </Grid>
            <Grid item xs={2}>
            <TextField  value={lastname_value} onChange={handleChangeLastname} required id="outlined-basic" label="Apellidos" variant="outlined" />
            </Grid>
            
            </Grid>
           
            <Grid className="containter-form-addpatient-inputs-pc" item xs={12}>

             <Grid item xs={2}>
             <TextField  value={phone_value} onChange={handleChangePhone} id="outlined-basic" label="Teléfono" variant="outlined" />
             </Grid>
             <Grid item xs={2}>
             <TextField   value={cod_per_value} onChange={handleChangeCodPer} required id="outlined-basic" label="Código personal" variant="outlined" />
             </Grid>
             <Grid item xs={2}>
             <TextField  value={car_value} onChange={handleChangeCar} required id="outlined-basic" label="Cargo" variant="outlined" />
             </Grid>

             </Grid>

             <Grid className="containter-form-addpatient-inputs-pc" item xs={12}>

              <Grid item xs={2}>
              <TextField type="number" value={ant_value}  onChange={handleChangeAnt} id="outlined-basic" label="Antiguedad" variant="outlined" />
              </Grid>
              <Grid item xs={2}>
              <TextField type="number" value={sal_value}  onChange={handleChangeSal} required id="outlined-basic" label="Salario" variant="outlined" />
              </Grid>
              
              </Grid>
              <Grid className="containter-form-addpatient-inputs-pc" item xs={12}>

                <Grid item xs={2}>
                <TextField  value={cod_dpto_value}  onChange={handleChangeCodDpto} id="outlined-basic" label="Código departamento" variant="outlined" />
                </Grid>
                <Grid item xs={2}>
                <TextField  value={der_value}  onChange={handleChangeDer} id="outlined-basic" label="Derecho ascenso" variant="outlined" />
                </Grid>

                </Grid>


             <Grid className="containter-form-addpatient-inputs-movil" item xs={12}>

             <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
             <TextField  value={dni_value} onChange={handleChangeDni} required id="outlined-basic" label="Dni" variant="outlined" />
             </Grid>
             <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
             <TextField  value={name_value} onChange={handleChangeName} required id="outlined-basic" label="Nombre" variant="outlined" />
             </Grid>
             <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
             <TextField   value={lastname_value} onChange={handleChangeLastname} required id="outlined-basic" label="Apellidos" variant="outlined" />
             </Grid>

             <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
             <TextField  value={phone_value} onChange={handleChangePhone}  id="outlined-basic" label="Teléfono" variant="outlined" />
             </Grid>
             <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
             <TextField   value={cod_per_value} onChange={handleChangeCodPer} required id="outlined-basic" label="Código personal" variant="outlined" />
             </Grid>
             <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
             <TextField  value={car_value} onChange={handleChangeCar} required id="outlined-basic" label="Cargo" variant="outlined" />
             </Grid>
             <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
             <TextField  type="number" value={ant_value}   onChange={handleChangeAnt}  id="outlined-basic" label="Antiguedad" variant="outlined" />
             </Grid>
             <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
             <TextField  type="number" value={sal_value}  onChange={handleChangeSal} required id="outlined-basic" label="Salario" variant="outlined" />
             </Grid>
             <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
             <TextField  value={cod_dpto_value}  onChange={handleChangeCodDpto} id="outlined-basic" label="Código departamento" variant="outlined" />
             </Grid>
             <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
             <TextField  value={der_value}  onChange={handleChangeDer} id="outlined-basic" label="Derecho ascenso" variant="outlined" />
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
export default EditPersonal;