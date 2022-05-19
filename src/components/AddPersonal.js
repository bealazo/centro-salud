import * as React from 'react';
import {Box} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import { Grid } from '@material-ui/core';

import {useContext} from 'react';
import { StoreContext } from '../store/StoreProvider';
import { types } from '../store/StoreReducer';

function AddPersonal(){
  //Para obtener el estado global, en este caso la lista de personal actual
  const [store, dispatch] = useContext(StoreContext);
  const{personal}=store;

  //Estado inicial para guardar los valores de los inputs
  const [dni_value, setDniValue] = React.useState("");
  const [name_value, setNameValue] = React.useState("");
  const [phone_value, setPhoneValue] = React.useState("");
  const [lastname_value, setLastnameValue] = React.useState("");
  const [cod_per_value, setCodPerValue] = React.useState("");
  const [car_value, setCarValue] = React.useState("");
  const [ant_value, setAntValue] = React.useState("");
  const [sal_value, setSalValue] = React.useState("");
  const [cod_dep_value, setCodDepValue] = React.useState("");
  const [der_value, setDerValue] = React.useState("");

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
  const handleChangeCodPer= (event) => {
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
 const handleChangeCodDep = (event) => {
  setCodDepValue(event.target.value);
};
const handleChangeDer = (event) => {
  setDerValue(event.target.value);
};

  //Añadir el elemento a la lista de personal
  const handleClickSave=()=>{   
 
 const item= {dni: dni_value,
 nombre: name_value,
 apellidos:lastname_value,
 telefono:phone_value,
 codigo_personal:cod_per_value,
 cargo:car_value,
 antiguedad:ant_value,
 salario:sal_value,
 codigo_dpto:cod_dep_value,
 derecho_ascenso:der_value
}
personal.push(item);

//envio la accion en el payload al store reducer para modificar el estado global
dispatch({type:types.addperlistaper,  payload:{personal:personal}});

//Limpio el formulario
setDniValue("");
setNameValue("");
setLastnameValue("");
setPhoneValue("");
setCodPerValue("");
setCarValue("");
setAntValue("");
setSalValue("");
setCodDepValue("");
setDerValue("");
}

  return(

    <div className="container-table">
        <Typography variant="h6">
        Agregar nuevo Personal
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
            <TextField   value={cod_per_value} onChange={handleChangeCodPer} required id="outlined-basic" label="Código del personal" variant="outlined" />
            </Grid>
            <Grid item xs={2}>
            <TextField  value={car_value} onChange={handleChangeCar} required id="outlined-basic" label="Cargo" variant="outlined" />
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
             <Grid className="containter-form-addpatient-inputs-pc" item xs={12}>

              <Grid item xs={2}>
              <TextField  value={cod_dep_value} type="number" onChange={handleChangeCodDep} required id="outlined-basic" label="Código de departamento" variant="outlined" />
              </Grid>
              <Grid item xs={2}>
              <TextField  value={der_value} onChange={handleChangeDer} id="outlined-basic" label="Derecho ascenso" variant="outlined" />
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
            <TextField   value={cod_per_value} onChange={handleChangeCodPer} required id="outlined-basic" label="Código del personal" variant="outlined" />
            </Grid>
            <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
            <TextField   value={car_value} onChange={handleChangeCar} required id="outlined-basic" label="Especialidad" variant="outlined" />
            </Grid>
            <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
            <TextField  value={ant_value}  type="number" onChange={handleChangeAnt}  id="outlined-basic" label="Antiguedad" variant="outlined" />
            </Grid>
            <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
            <TextField  value={sal_value} type="number" onChange={handleChangeSal} required id="outlined-basic" label="Salario" variant="outlined" />
            </Grid>
            <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
            <TextField  value={cod_dep_value}  type="number" onChange={handleChangeCodDep} required  id="outlined-basic" label="Código de departamento" variant="outlined" />
            </Grid>
            <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
            <TextField  value={der_value} onChange={handleChangeDer}  id="outlined-basic" label="Derecho ascenso" variant="outlined" />
            </Grid>

            </Grid>
            <div  className="button-form">
          <Button  onClick={handleClickSave} variant="contained" color="primary">Guardar</Button>
         </div>
    </Box>
   </div>
  );
}
export default AddPersonal;