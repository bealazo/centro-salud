import * as React from 'react';
import {Box} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import { Grid } from '@material-ui/core';

import {useContext} from 'react';
import { StoreContext } from '../store/StoreProvider';
import { types } from '../store/StoreReducer';

function AddConsult(){
   
    //Para obtener el estado global, en este caso la lista de consultas actual
    const [store, dispatch] = useContext(StoreContext);
    const{consultas}=store;
    const{addcon}=store;

    //Estado inicial para guardar los valores de los inputs
    const [num_value, setNumValue] = React.useState("");   
    const [cod_ser_value, setCodSerValue] = React.useState("");
    const [nom_ser_value, setNomSerValue] = React.useState("");
    const [pla_value, setPlaValue] = React.useState("");

    //Cambio el estado inicial del input correspondiente
    const handleChangeNum = (event) => {
      setNumValue(event.target.value);
    };
    const handleChangeCodSer = (event) => {
      setCodSerValue(event.target.value);
    };
    const handleChangeNomSer = (event) => {
      setNomSerValue(event.target.value);
    };
    const handleChangePla = (event) => {
      setPlaValue(event.target.value);
    };
    

    //Añadir el elemento a la lista de consultas
    const handleClickSave=()=>{   
   
   const item= {numero_consulta: num_value,
    codigo_servicio: cod_ser_value,
    nombre_servicio:nom_ser_value,
    planta:pla_value
  }
  consultas.push(item);
  
  //envio la accion en el payload al store reducer para modificar el estado global
  dispatch({type:types.addconlistacon,  payload:{consultas:consultas}});

  //Limpio el formulario
  setNumValue("");
  setCodSerValue("");
  setNomSerValue("");
  setPlaValue("");
  
  }
  const handleClickCancel=()=>{   

    //Oculto el formulario
    dispatch({type:types.changeaddcon,  payload:{addcon: false}});
  
  }

    return(

      <div className="container-table">
          <Typography variant="h6">
          Agregar nueva consulta
        </Typography>
        <Box
          component="form"
         
        >    <Grid className="containter-form-addpatient-inputs-pc" item xs={12}>

             <Grid item xs={2}>
             <TextField  type="number" value={num_value} onChange={handleChangeNum} required id="outlined-basic"  label="Número consulta" variant="outlined" />
             </Grid>
             <Grid item xs={2}>
             <TextField   type="number" value={cod_ser_value} onChange={handleChangeCodSer} required id="outlined-basic" label="Código de servicio" variant="outlined" />
             </Grid>
             </Grid>
            
             <Grid className="containter-form-addpatient-inputs-pc" item xs={12}>

              <Grid item xs={2}>
              <TextField  value={nom_ser_value} onChange={handleChangeNomSer} id="outlined-basic" label="Nombre de servicio" variant="outlined" />
              </Grid>
              <Grid item xs={2}>
              <TextField    type="number" value={pla_value} onChange={handleChangePla} id="outlined-basic" label="Planta" variant="outlined" />
              </Grid>
           
              </Grid>

              <Grid className="containter-form-addpatient-inputs-movil" item xs={12}>

              <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
              <TextField  type="number"  value={num_value} onChange={handleChangeNum} required id="outlined-basic"  label="Número consulta" variant="outlined" />
              </Grid>
              <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
              <TextField  type="number" value={cod_ser_value} onChange={handleChangeCodSer} required id="outlined-basic" label="Código de servicio" variant="outlined" />
              </Grid>
              <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
              <TextField  value={nom_ser_value} onChange={handleChangeNomSer} id="outlined-basic" label="Nombre de servicio" variant="outlined" />
              </Grid>

              <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
              <TextField   type="number"  value={pla_value} onChange={handleChangePla} id="outlined-basic" label="Planta" variant="outlined" />
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
export default AddConsult;