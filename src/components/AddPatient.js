import * as React from 'react';
import {Box} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import { Grid } from '@material-ui/core';

function AddPatient(){

  
    return(

      <div className="container-table">
          <Typography variant="h6">
          Agregar nuevo paciente
        </Typography>
        <Box
          component="form"
         
        >    <Grid className="containter-form-addpatient-inputs-pc" item xs={12}>

             <Grid item xs={2}>
             <TextField  required id="outlined-basic" label="Dni" variant="outlined" />
             </Grid>
             <Grid item xs={2}>
             <TextField  required id="outlined-basic" label="Nombre" variant="outlined" />
             </Grid>
             <Grid item xs={2}>
             <TextField  required id="outlined-basic" label="Apellidos" variant="outlined" />
             </Grid>
             
             </Grid>
            
             <Grid className="containter-form-addpatient-inputs-pc" item xs={12}>

              <Grid item xs={2}>
              <TextField  id="outlined-basic" label="Teléfono" variant="outlined" />
              </Grid>
              <Grid item xs={2}>
              <TextField  required id="outlined-basic" label="Número seguridad social" variant="outlined" />
              </Grid>
              <Grid item xs={2}>
              <TextField  required id="outlined-basic" label="Código historia clínica" variant="outlined" />
              </Grid>

              </Grid>

              <Grid className="containter-form-addpatient-inputs-movil" item xs={12}>

              <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
              <TextField  required id="outlined-basic" label="Dni" variant="outlined" />
              </Grid>
              <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
              <TextField  required id="outlined-basic" label="Nombre" variant="outlined" />
              </Grid>
              <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
              <TextField  required id="outlined-basic" label="Apellidos" variant="outlined" />
              </Grid>

              <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
              <TextField  id="outlined-basic" label="Teléfono" variant="outlined" />
              </Grid>
              <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
              <TextField  required id="outlined-basic" label="Número seguridad social" variant="outlined" />
              </Grid>
              <Grid className="containter-form-addpatient-inputs-item-movil" item xs={12}>
              <TextField  required id="outlined-basic" label="Código historia clínica" variant="outlined" />
              </Grid>

              </Grid>
              <div  className="button-form">
            <Button  variant="contained" color="primary">Guardar</Button>
           </div>
      </Box>
     </div>
    );
}
export default AddPatient;