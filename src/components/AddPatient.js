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

    //Para obtener el estado global, en este caso la lista de pacientes actual
    const [store, dispatch] = useContext(StoreContext);
    const{pacientes}=store;
    const{addpac}=store;

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
  
  //envio la accion en el payload al store reducer para modificar el estado global
  dispatch({type:types.addpaclistapac,  payload:{pacientes:pacientes}});

  //Limpio el formulario
  setDniValue("");
  setNameValue("");
  setLastnameValue("");
  setPhoneValue("");
  setSecValue("");
  setCodValue("");

  }
  const handleClickCancel=()=>{   

    //Oculto el formulario
    dispatch({type:types.changeaddpac,  payload:{addpac: true}});
  
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
             <TextField  value={dni_value} onChange={handleChangeDni} required id="outlined-basic" label="Dni" variant="outlined" />
             </Grid>
             <Grid item xs={2}>
             <TextField  value={name_value} onChange={handleChangeName} required id="outlined-basic" label="Nombre" variant="outlined" />
             </Grid>
             <Grid item xs={2}>
             <TextField   value={lastname_value} onChange={handleChangeLastname} required id="outlined-basic" label="Apellidos" variant="outlined" />
             </Grid>
             
             </Grid>
            
             <Grid className="containter-form-addpatient-inputs-pc" item xs={12}>

              <Grid item xs={2}>
              <TextField  value={phone_value} onChange={handleChangePhone} id="outlined-basic" label="Teléfono" variant="outlined" />
              </Grid>
              <Grid item xs={2}>
              <TextField   value={sec_value} onChange={handleChangeSecurity} required id="outlined-basic" label="Número seguridad social" variant="outlined" />
              </Grid>
              <Grid item xs={2}>
              <TextField  value={cod_value} onChange={handleChangeCod} required id="outlined-basic" label="Código historia clínica" variant="outlined" />
              </Grid>

              </Grid>

              <Grid className="containter-form-addpatient-inputs-movil" item xs={12}>

              <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
              <TextField  value={dni_value}  onChange={handleChangeDni} required id="outlined-basic" label="Dni" variant="outlined" />
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
              <TextField  value={sec_value} onChange={handleChangeSecurity} required id="outlined-basic" label="Número seguridad social" variant="outlined" />
              </Grid>
              <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
              <TextField  value={cod_value} onChange={handleChangeCod} required id="outlined-basic" label="Código historia clínica" variant="outlined" />
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
export default AddPatient;