import * as React from 'react';
import {Box} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import { Grid } from '@material-ui/core';

import {useContext} from 'react';
import { StoreContext } from '../store/StoreProvider';
import { types } from '../store/StoreReducer';


function EditDoctor(){
   
   //Para obtener el estado global, en este caso la lista de sanitarios actual
   const [store, dispatch] = useContext(StoreContext);
   const{sanitarios}=store;
   const{editsan}=store;
   //Para obtener los datos de la fila a mostrar en el formulario de edición
   const {row_edit_doctor} = store;
   console.log(row_edit_doctor)



 
    //Guardo el dni inicial para hacer la búsqueda del elemento a modificar en la lista
     const dni_initial= row_edit_doctor.dni;
   //Variables iniciales para guardar los valores de los inputs
   const [dni_value, setDniValue] = React.useState(row_edit_doctor.dni);
   const [name_value, setNameValue] = React.useState(row_edit_doctor.nombre);
   const [phone_value, setPhoneValue] = React.useState(row_edit_doctor.telefono);
   const [lastname_value, setLastNameValue] = React.useState(row_edit_doctor.apellidos);
   const [cat_value, setCatValue] = React.useState(row_edit_doctor.categoria);
   const [esp_value, setEspValue] = React.useState(row_edit_doctor.especialidad);
   const [ant_value, setAntValue] = React.useState(row_edit_doctor.antiguedad);
   const [sal_value, setSalValue] = React.useState(row_edit_doctor.salario);
 
   //Cambio el estado inicial del input correspondiente
   const handleChangeDni = (event) => {
     setDniValue(event.target.value);
   };
   const handleChangeName = (event) => {
       setNameValue(event.target.value)
     
     console.log(name_value)
   };
   const handleChangeLastname = (event) => {
   setLastNameValue(event.target.value);
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

   //Editar el elemento de la lista de sanitarios
   const handleClickSave=()=>{   
   sanitarios.map(item=>
        {if(item.dni==dni_initial)
            {
                console.log(name_value)
              item.dni= dni_value;
              item.nombre= name_value;
              item.apellidos=lastname_value;
              item.telefono=phone_value;
              item.categoria=cat_value;
              item.especialidad=esp_value;
              item.antiguedad=ant_value;
              item.salario=sal_value;
              
            }         

        });
        console.log(sanitarios)

        //envio la accion en el payload al store reducer para modificar el estado global
        //OJO: ME SIRVE EL MISMO TIPO QUE PARA AÑADIR NUEVOS ITEMS A LA LISTA, PUESTO QUE LA ACCION PARA ESE TIPO ES MODIFICAR EL LISTADO EXISTENTE SUSTITUYENDOLO 
        //CON EL NUEVO LISTADO PASADO
        dispatch({type:types.addsanlistasan,  payload:{sanitarios:sanitarios}});

        //Oculto el formulario
        dispatch({type:types.changeeditsan,  payload:{editsan:false}});

 
 }
 
 

   return(

     <div className="container-table">
         <Typography variant="h6">
         Editar sanitario seleccionado
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
             <TextField   value={cat_value} onChange={handleChangeCat} required id="outlined-basic" label="Categoría" variant="outlined" />
             </Grid>
             <Grid item xs={2}>
             <TextField  value={esp_value} onChange={handleChangeEsp} required id="outlined-basic" label="Especialidad" variant="outlined" />
             </Grid>

             </Grid>

             <Grid className="containter-form-addpatient-inputs-pc" item xs={12}>

              <Grid item xs={2}>
              <TextField  value={ant_value}  onChange={handleChangeAnt} id="outlined-basic" label="Antiguedad" variant="outlined" />
              </Grid>
              <Grid item xs={2}>
              <TextField  value={sal_value}  onChange={handleChangeSal} required id="outlined-basic" label="Salario" variant="outlined" />
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
             <TextField  value={ant_value}   onChange={handleChangeAnt}  id="outlined-basic" label="Antiguedad" variant="outlined" />
             </Grid>
             <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
             <TextField  value={sal_value}  onChange={handleChangeSal} required id="outlined-basic" label="Salario" variant="outlined" />
             </Grid>

             </Grid>
             <div  className="button-form">
           <Button  onClick={handleClickSave} variant="contained" color="primary">Guardar</Button>
          </div>
     </Box>
    </div>
   );
}
export default EditDoctor;