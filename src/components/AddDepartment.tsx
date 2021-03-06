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
import Departamento from "../interfaces/Departamento"

const AddDepartment=()=>{
 
    //Para obtener el estado global, en este caso la lista de departamentos actual
    const [store, dispatch,readListados,addListados] = useContext(StoreContext);
    const departamentos:Departamento[]=store.departamentos;
    
    //Estado inicial para guardar los valores de los inputs
    const [cod_value, setCodValue] = React.useState(0);   
    const [nom_value, setNomValue] = React.useState("");

    //Cambio el estado inicial del input correspondiente
    const handleChangeCod=(event:React.ChangeEvent):void => {
      let target = event.target as HTMLInputElement;
      setCodValue(Number(target.value));
    };
    const handleChangeNom = (event:React.ChangeEvent):void => {
      let target = event.target as HTMLInputElement;
      setNomValue(target.value);
    };
     

    //Añadir el elemento a la lista de departamentos
    const handleClickSave=(e):void=>{   
      e.preventDefault();
      const item= {codigo_departamento: cod_value,
        nombre_departamento: nom_value,
      
      }
      //llamo a la función addListados del StoreProvider que se encarga de enviar los datos a la API agregando el item al listado actual y actualizar el estado global
      let listado=""
      if(store.adddep.adddep==true){
      listado="departamentos"
      }
      addListados(item,listado);
      //Limpio el formulario
      setCodValue(0);
      setNomValue("");
  }
  const handleClickCancel=():void=>{   

    //Oculto el formulario
    dispatch({type:types.changeadddep,  payload:{adddep: false}});
  
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
export default AddDepartment;