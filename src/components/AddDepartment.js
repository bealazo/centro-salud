import * as React from 'react';
import {Box} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import { Grid } from '@material-ui/core';

import {useContext} from 'react';
import { StoreContext } from '../store/StoreProvider';
import { types } from '../store/StoreReducer';

function AddDepartment(){
 
    //Para obtener el estado global, en este caso la lista de departamentos actual
    const [store, dispatch] = useContext(StoreContext);
    const{departamentos}=store;

    //Estado inicial para guardar los valores de los inputs
    const [cod_value, setCodValue] = React.useState("");   
    const [nom_value, setNomValue] = React.useState("");

    //Cambio el estado inicial del input correspondiente
    const handleChangeCod = (event) => {
      setCodValue(event.target.value);
    };
    const handleChangeNom = (event) => {
      setNomValue(event.target.value);
    };
     

    //Añadir el elemento a la lista de departamentos
    const handleClickSave=()=>{   
   
   const item= {codigo_departamento: cod_value,
    nombre_departamento: nom_value,
  
  }
  departamentos.push(item);
  
  //envio la accion en el payload al store reducer para modificar el estado global
  dispatch({type:types.adddeplistadep,  payload:{departamentos:departamentos}});

  //Limpio el formulario
  setCodValue("");
  setNomValue("");
  }

    return(

      <div className="container-table">
          <Typography variant="h6">
          Agregar nuevo departamento
        </Typography>
        <Box
          component="form"
         
        >    <Grid className="containter-form-addpatient-inputs-pc" item xs={12}>

             <Grid item xs={2}>
             <TextField  type="number" value={cod_value} onChange={handleChangeCod} required id="outlined-basic"  label="Código departamento" variant="outlined" />
             </Grid>
             <Grid item xs={2}>
             <TextField  value={nom_value} onChange={handleChangeNom} required id="outlined-basic" label="Nombre departamento" variant="outlined" />
             </Grid>
             </Grid>
            
          
              <Grid className="containter-form-addpatient-inputs-movil" item xs={12}>

              <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
              <TextField  type="number" value={cod_value} onChange={handleChangeCod} required id="outlined-basic"  label="Código departamento" variant="outlined" />
              </Grid>
              <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
              <TextField  value={nom_value} onChange={handleChangeNom} required id="outlined-basic" label="Nombre departamento" variant="outlined" />
              </Grid>
            
              </Grid>
              <div  className="button-form">
            <Button  onClick={handleClickSave} variant="contained" color="primary">Guardar</Button>
           </div>
      </Box>
     </div>
    );
}
export default AddDepartment;