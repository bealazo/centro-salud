import * as React from 'react';
import {Box} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import { Grid } from '@material-ui/core';

import {useContext} from 'react';
import { StoreContext } from '../store/StoreProvider';
import { types } from '../store/StoreReducer';

function AddPatient(){

    //Para obtener el estado global
    const [store, dispatch] = useContext(StoreContext);
    const{pacientes}=store;

    //Estado inicial para guardar los valores de los inputs
    const [dni_value, setDniValue] = React.useState("");
    const [name_value, setNameValue] = React.useState("");
    const [phone_value, setPhoneValue] = React.useState("");
    const [lastname_value, setLastnameValue] = React.useState("");
    const [sec_value, setSecValue] = React.useState("");
    const [cod_value, setCodValue] = React.useState("");

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
    const handleChangeSecurity = (event) => {
      setSecValue(event.target.value);
    };
    const handleChangeCod = (event) => {
      setCodValue(event.target.value);
    };

    //Añadir el elemento a la lista de pacientes
    const handleClickSave=()=>{   
   
   const item= {dni: dni_value,
   nombre: name_value,
   apellidos:lastname_value,
   telefono:phone_value,
   numero_seguridad_social:sec_value,
   codigo_historia_clinica:cod_value
  }
  pacientes.push(item);
  
  dispatch({type:types.addpaclistapac,  payload:{pacientes:pacientes}});

  }

    return(

      <div className="container-table">
          <Typography variant="h6">
          Agregar nuevo paciente
        </Typography>
        <Box
          component="form"
         
        >    <Grid className="containter-form-addpatient-inputs-pc" item xs={12}>

             <Grid item xs={2}>
             <TextField onChange={handleChangeDni} required id="outlined-basic" label="Dni" variant="outlined" />
             </Grid>
             <Grid item xs={2}>
             <TextField onChange={handleChangeName} required id="outlined-basic" label="Nombre" variant="outlined" />
             </Grid>
             <Grid item xs={2}>
             <TextField  onChange={handleChangeLastname} required id="outlined-basic" label="Apellidos" variant="outlined" />
             </Grid>
             
             </Grid>
            
             <Grid className="containter-form-addpatient-inputs-pc" item xs={12}>

              <Grid item xs={2}>
              <TextField onChange={handleChangePhone} id="outlined-basic" label="Teléfono" variant="outlined" />
              </Grid>
              <Grid item xs={2}>
              <TextField  onChange={handleChangeSecurity} required id="outlined-basic" label="Número seguridad social" variant="outlined" />
              </Grid>
              <Grid item xs={2}>
              <TextField onChange={handleChangeCod} required id="outlined-basic" label="Código historia clínica" variant="outlined" />
              </Grid>

              </Grid>

              <Grid className="containter-form-addpatient-inputs-movil" item xs={12}>

              <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
              <TextField  onChange={handleChangeDni} required id="outlined-basic" label="Dni" variant="outlined" />
              </Grid>
              <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
              <TextField  onChange={handleChangeName} required id="outlined-basic" label="Nombre" variant="outlined" />
              </Grid>
              <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
              <TextField   onChange={handleChangeLastname} required id="outlined-basic" label="Apellidos" variant="outlined" />
              </Grid>

              <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
              <TextField onChange={handleChangePhone}  id="outlined-basic" label="Teléfono" variant="outlined" />
              </Grid>
              <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
              <TextField  onChange={handleChangeSecurity} required id="outlined-basic" label="Número seguridad social" variant="outlined" />
              </Grid>
              <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
              <TextField  onChange={handleChangeCod} required id="outlined-basic" label="Código historia clínica" variant="outlined" />
              </Grid>

              </Grid>
              <div  className="button-form">
            <Button  onClick={handleClickSave} variant="contained" color="primary">Guardar</Button>
           </div>
      </Box>
     </div>
    );
}
export default AddPatient;