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
import Personal from "../interfaces/Personal"

const EditPersonal=()=>{
   
   //Para obtener el estado global, en este caso la lista de personal actual
   const [store, dispatch,readListados,addListados,deleteListados,editListados] = useContext(StoreContext);
   const personal:Personal[]=store.personal;

   //Para obtener los datos de la fila a mostrar en el formulario de edición
   const row_edit_per:Personal = store.row_edit_per;
  
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
   const handleChangeDni = (event:React.ChangeEvent):void => {
    let target = event.target as HTMLInputElement;
    setDniValue(target.value);
  };
  const handleChangeName = (event:React.ChangeEvent):void=> {
    let target = event.target as HTMLInputElement;
    setNameValue(target.value);
  };
  const handleChangeLastname = (event:React.ChangeEvent):void=> {
    let target = event.target as HTMLInputElement;
    setLastNameValue(target.value);
  };
  const handleChangePhone = (event:React.ChangeEvent):void => {
    let target = event.target as HTMLInputElement;
    setPhoneValue(target.value);
  };
  const handleChangeCodPer= (event:React.ChangeEvent):void => {
    let target = event.target as HTMLInputElement;
    setCodPerValue(target.value);
  };
  const handleChangeCar = (event:React.ChangeEvent):void => {
    let target = event.target as HTMLInputElement;
    setCarValue(target.value);
  };
  const handleChangeAnt = (event:React.ChangeEvent):void=> {
    let target = event.target as HTMLInputElement;
   setAntValue(Number(target.value));
 };
 const handleChangeSal = (event:React.ChangeEvent):void=> {
  let target = event.target as HTMLInputElement;
   setSalValue(Number(target.value));
 };
 const handleChangeCodDpto = (event:React.ChangeEvent):void => {
  let target = event.target as HTMLInputElement;
  setCodDptoValue(Number(target.value));
};
const handleChangeDer = (event:React.ChangeEvent):void => {
  let target = event.target as HTMLInputElement;
  setDerValue(target.value);
};

   //Editar el elemento de la lista de personal
   const handleClickSave=():void=>{   
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

                //llamo a la función editListados del StoreProvider que se encarga de enviar los datos a la API editando el item del listado actual
                let listado=""
                if(store.editper.editper==true){
                listado="personal"
                }
                editListados(item,listado); 
              
            }         

        });
    
        //Oculto el formulario
        dispatch({type:types.changeeditper,  payload:{editper:false}});

 
 }
 const handleClickCancel=():void=>{   

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
                <TextField type="number" value={cod_dpto_value}  onChange={handleChangeCodDpto} id="outlined-basic" label="Código departamento" variant="outlined" />
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
             <TextField type="number" value={cod_dpto_value}  onChange={handleChangeCodDpto} id="outlined-basic" label="Código departamento" variant="outlined" />
             </Grid>
             <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
             <TextField  value={der_value}  onChange={handleChangeDer} id="outlined-basic" label="Derecho ascenso" variant="outlined" />
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
export default EditPersonal;