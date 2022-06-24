import * as React from 'react';
import {Box} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import { Grid } from '@material-ui/core';

import {useContext} from 'react';
import { StoreContext } from '../store/StoreProvider';
import { types } from '../store/StoreReducer';


function AddDoctor(){

   //Para obtener el estado global, en este caso la lista de sanitarios actual
   const [store, dispatch] = useContext(StoreContext);
   const{sanitarios}=store;
   const {addsan} = store;

   //Estado inicial para guardar los valores de los inputs
   const [dni_value, setDniValue] = React.useState("");
   const [name_value, setNameValue] = React.useState("");
   const [phone_value, setPhoneValue] = React.useState("");
   const [lastname_value, setLastnameValue] = React.useState("");
   const [cat_value, setCatValue] = React.useState("");
   const [esp_value, setEspValue] = React.useState("");
   const [ant_value, setAntValue] = React.useState("");
   const [sal_value, setSalValue] = React.useState("");

   //Cambio el estado inicial del input correspondiente
   const handleChangeDni = (event) => {
     setDniValue(event.target.value);
   };
   const handleChangeName = (event) => {
     setNameValue(event.target.value);
   };
   const handleChangeLastname = (event) => {
     setLastnameValue(event.target.value);
   };
   const handleChangePhone = (event) => {
     setPhoneValue(event.target.value);
   };
   const handleChangeCat = (event) => {
     setCatValue(event.target.value);
   };
   const handleChangeEsp = (event) => {
     setEspValue(event.target.value);
   };
   const handleChangeAnt = (event) => {
    setAntValue(event.target.value);
  };
  const handleChangeSal = (event) => {
    setSalValue(event.target.value);
  };

   //Añadir el elemento a la lista de sanitarios
   const handleClickSave=()=>{   
  
  const item= {dni: dni_value,
  nombre: name_value,
  apellidos:lastname_value,
  telefono:phone_value,
  categoria:cat_value,
  especialidad:esp_value,
  antiguedad:ant_value,
  salario:sal_value
 }
 sanitarios.push(item);
 
 //envio la accion en el payload al store reducer para modificar el estado global
 dispatch({type:types.addsanlistasan,  payload:{sanitarios:sanitarios}});

 //Limpio el formulario
 setDniValue("");
 setNameValue("");
 setLastnameValue("");
 setPhoneValue("");
 setCatValue("");
 setEspValue("");
 setAntValue("");
 setSalValue("");
 }
 const handleClickCancel=()=>{   

  //Oculto el formulario
  dispatch({type:types.changeaddsan,  payload:{addsan: false}});

}

   return(

     <div className="container-table">
         <Typography variant="h6">
         Agregar nuevo Sanitario
       </Typography>
       <Box
         component="form"
        
       >    <Grid className="containter-form-addpatient-inputs-pc" item xs={12}>

            <Grid item xs={2}>
            <TextField value={dni_value} onChange={handleChangeDni} required id="outlined-basic" label="Dni" variant="outlined" />
            </Grid>
            <Grid item xs={2}>
            <TextField value={name_value} onChange={handleChangeName} required id="outlined-basic" label="Nombre" variant="outlined" />
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
             <TextField   value={cat_value} onChange={handleChangeCat} required id="outlined-basic" label="Categoría" variant="outlined" />
             </Grid>
             <Grid item xs={2}>
             <TextField  value={esp_value} onChange={handleChangeEsp} required id="outlined-basic" label="Especialidad" variant="outlined" />
             </Grid>

             </Grid>

             <Grid className="containter-form-addpatient-inputs-pc" item xs={12}>

              <Grid item xs={2}>
              <TextField  value={ant_value} type="number" onChange={handleChangeAnt} id="outlined-basic" label="Antiguedad" variant="outlined" />
              </Grid>
              <Grid item xs={2}>
              <TextField  value={sal_value} type="number" onChange={handleChangeSal} required id="outlined-basic" label="Salario" variant="outlined" />
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
             <TextField   value={cat_value} onChange={handleChangeCat} required id="outlined-basic" label="Categoría" variant="outlined" />
             </Grid>
             <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
             <TextField   value={esp_value} onChange={handleChangeEsp} required id="outlined-basic" label="Especialidad" variant="outlined" />
             </Grid>
             <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
             <TextField  value={ant_value}  type="number" onChange={handleChangeAnt}  id="outlined-basic" label="Antiguedad" variant="outlined" />
             </Grid>
             <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
             <TextField  value={sal_value} type="number" onChange={handleChangeSal} required id="outlined-basic" label="Salario" variant="outlined" />
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
export default AddDoctor;