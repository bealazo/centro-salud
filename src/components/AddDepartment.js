import * as React from 'react';
import {Box} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';
import {Typography} from '@material-ui/core';

function AddDepartment(){
    return(

      <div className="container-table">
         <Typography variant="h6">
          Agregar nuevo departamento
        </Typography>
      <Box
        component="form"
       
      >          
           <TextField  required id="outlined-basic" label="Nombre" variant="outlined" />
           <TextField  required id="outlined-basic" label="Nombre" variant="outlined" />
           <TextField  required id="outlined-basic" label="Nombre" variant="outlined" />
           <TextField  required id="outlined-basic" label="Nombre" variant="outlined" />
           <div  className="button-form">
            <Button  variant="contained" color="primary">Guardar</Button>
           </div>
    </Box>
   </div>
    );
}
export default AddDepartment;