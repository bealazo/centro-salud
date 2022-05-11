import * as React from 'react';
import {Box} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';
import LateralMenu from "../components/LateralMenu";

function AddPatient(){
    return(

        <div className="App">
      
            
      
       {/**Renderizado del menú lateral, paso la funcion handleListItem para que este componente hijo LateralMenu modifique sus parametros de acuerdo al onclick*/}
         <LateralMenu/>
     
        <main className="main-container">
        <section>
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
      </section>
      </main>

      </div>
    );
}
export default AddPatient;