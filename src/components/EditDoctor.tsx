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
import Sanitario from "../interfaces/Sanitario";

const EditDoctor=()=>{
   
   //Para obtener el estado global, en este caso la lista de sanitarios actual
   const [store, dispatch,readListados,addListados,deleteListados,editListados] = useContext(StoreContext);
   const sanitarios:Sanitario[]=store.sanitarios;

   //Para obtener los datos de la fila a mostrar en el formulario de edición
   const row_edit_doctor:Sanitario = store.row_edit_doctor;
  
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
   const handleChangeDni = (event:React.ChangeEvent):void => {
    let target = event.target as HTMLInputElement;
     setDniValue(target.value);
   };
   const handleChangeName = (event:React.ChangeEvent):void => {
    let target = event.target as HTMLInputElement;
     setNameValue(target.value);
   };
   const handleChangeLastname = (event:React.ChangeEvent):void => {
    let target = event.target as HTMLInputElement;
    setLastNameValue(target.value);
   };
   const handleChangePhone = (event:React.ChangeEvent):void => {
    let target = event.target as HTMLInputElement;
     setPhoneValue(target.value);
   };
   const handleChangeCat = (event:React.ChangeEvent):void => {
    let target = event.target as HTMLInputElement;
     setCatValue(target.value);
   };
   const handleChangeEsp = (event:React.ChangeEvent):void => {
    let target = event.target as HTMLInputElement;
     setEspValue(target.value);
   };
   const handleChangeAnt = (event:React.ChangeEvent):void => {
    let target = event.target as HTMLInputElement;
    setAntValue(Number(target.value));
  };
  const handleChangeSal = (event:React.ChangeEvent):void => {
    let target = event.target as HTMLInputElement;
    setSalValue(Number(target.value));
  };

   //Editar el elemento de la lista de sanitarios
   const handleClickSave=():void=>{   
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

               //llamo a la función editListados del StoreProvider que se encarga de enviar los datos a la API editando el item del listado actual
               let listado=""
               if(store.editsan.editsan==true){
               listado="sanitarios"
               }
               editListados(item,listado); 
              
            }         

        });
      
        //Oculto el formulario
        dispatch({type:types.changeeditsan,  payload:{editsan:false}});

 
 }
 const handleClickCancel=():void=>{   

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
            <TextField  value={name_value} onChange={handleChangeName} required id="outlined-basic" label="Nombre" variant="outlined" />
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
              <TextField  value={ant_value} type="number"  onChange={handleChangeAnt} id="outlined-basic" label="Antiguedad" variant="outlined" />
              </Grid>
              <Grid item xs={2}>
              <TextField  value={sal_value}  type="number" onChange={handleChangeSal} required id="outlined-basic" label="Salario" variant="outlined" />
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
             <TextField  value={ant_value}   type="number" onChange={handleChangeAnt}  id="outlined-basic" label="Antiguedad" variant="outlined" />
             </Grid>
             <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
             <TextField  value={sal_value}  type="number" onChange={handleChangeSal} required id="outlined-basic" label="Salario" variant="outlined" />
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
export default EditDoctor;