import * as React from 'react';
//import '../App.css'; NO HACE FALTA, YA LA IMPORTÉ EN APP
import {Typography} from '@material-ui/core';
import CustomizedTables from "./CustomizedTables";

//Tipado Props
type Props = {
  handleModify:Function,
  listar: string,
}

const ListComponent=({handleModify,listar}:Props)=>{

    return(
        <div className="container-table">

            <div>
                {listar=="Pacientes"?
                <>
                  <Typography variant="h6" align="left">
                  Listado de {listar}
                 </Typography>
                <CustomizedTables listar={listar} handleModify={handleModify}/>
                </>:
                listar=="Sanitarios"?
                <>
                  <Typography variant="h6" align="left">
                  Listado de {listar}
                 </Typography>
                <CustomizedTables listar={listar} handleModify={handleModify}/>
                </>:
                 listar=="Personal"?
                 <>
                   <Typography variant="h6" align="left">
                   Listado de {listar}
                  </Typography>
                 <CustomizedTables listar={listar} handleModify={handleModify}/>
                 </>:
                  listar=="Consultas"?
                  <>
                    <Typography variant="h6" align="left">
                    Listado de {listar}
                   </Typography>
                  <CustomizedTables listar={listar} handleModify={handleModify}/>
                  </>:
                  listar=="Departamentos"?
                  <>
                    <Typography variant="h6" align="left">
                    Listado de {listar}
                   </Typography>
                  <CustomizedTables listar={listar} handleModify={handleModify}/>
                  </>:
                <Typography variant="h6">
                {listar}
               </Typography>
               }
             
            </div>
            

        </div>
    );

}
export default ListComponent;