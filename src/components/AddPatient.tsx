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
import Paciente from "../interfaces/Paciente"

const AddPatient=()=>{

    //Para obtener el estado global, en este caso la lista de pacientes actual
    const [store, dispatch,readListados,addListados] = useContext(StoreContext);
    const pacientes:Paciente[]=store.pacientes;
    
    //Estado inicial para guardar los valores de los inputs
    const [dni_value, setDniValue] = React.useState("");
    const [name_value, setNameValue] = React.useState("");
    const [phone_value, setPhoneValue] = React.useState("");
    const [lastname_value, setLastnameValue] = React.useState("");
    const [sec_value, setSecValue] = React.useState(0);
    const [cod_value, setCodValue] = React.useState("");

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
      setLastnameValue(target.value);
    };
    const handleChangePhone = (event:React.ChangeEvent):void => {
      let target = event.target as HTMLInputElement;
      setPhoneValue(target.value);
    };
    const handleChangeSecurity = (event:React.ChangeEvent):void => {
      let target = event.target as HTMLInputElement;
      setSecValue(Number(target.value));
    };
    const handleChangeCod = (event:React.ChangeEvent):void => {
      let target = event.target as HTMLInputElement;
      setCodValue(target.value);
    };

    //Añadir el elemento a la lista de pacientes
    const handleClickSave=(e):void=>{   
   
        e.preventDefault();
      const item= {dni: dni_value,
      nombre: name_value,
      apellidos:lastname_value,
      telefono:phone_value,
      numero_seguridad_social:sec_value,
      codigo_historia_clinica:cod_value
        }
      //llamo a la función addListados del StoreProvider que se encarga de enviar los datos a la API agregando el item al listado actual y actualizar el estado global
        let listado=""
        if(store.addpac.addpac==true){
        listado="pacientes"
        }
        addListados(item,listado);
      
        //Limpio el formulario
        setDniValue("");
        setNameValue("");
        setLastnameValue("");
        setPhoneValue("");
        setSecValue(0);
        setCodValue("");

  }
  const handleClickCancel=():void=>{   

    //Oculto el formulario
    dispatch({type:types.changeaddpac,  payload:{addpac: false}});
  
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
              <TextField  type="number" value={sec_value} onChange={handleChangeSecurity} required id="outlined-basic" label="Número seguridad social" variant="outlined" />
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
              <TextField type="number" value={sec_value} onChange={handleChangeSecurity} required id="outlined-basic" label="Número seguridad social" variant="outlined" />
              </Grid>
              <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
              <TextField  value={cod_value} onChange={handleChangeCod} required id="outlined-basic" label="Código historia clínica" variant="outlined" />
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
export default AddPatient;