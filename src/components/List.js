import * as React from 'react';
//import '../App.css'; NO HACE FALTA, YA LA IMPORTÉ EN APP
import {Typography} from '@material-ui/core';
import CustomizedTables from "../components/CustomizedTables";


function ListComponent(props){

    return(
        <div className="container-table">

            <div>
                {props.listar=="Pacientes"?
                <>
                  <Typography variant="h6" align="left">
                  Listado de {props.listar}
                 </Typography>
                <CustomizedTables listar={props.listar}/>
                </>:
                props.listar=="Sanitarios"?
                <>
                  <Typography variant="h6" align="left">
                  Listado de {props.listar}
                 </Typography>
                <CustomizedTables listar={props.listar}/>
                </>:
                 props.listar=="Personal"?
                 <>
                   <Typography variant="h6" align="left">
                   Listado de {props.listar}
                  </Typography>
                 <CustomizedTables listar={props.listar}/>
                 </>:
                  props.listar=="Consultas"?
                  <>
                    <Typography variant="h6" align="left">
                    Listado de {props.listar}
                   </Typography>
                  <CustomizedTables listar={props.listar}/>
                  </>:
                  props.listar=="Departamentos"?
                  <>
                    <Typography variant="h6" align="left">
                    Listado de {props.listar}
                   </Typography>
                  <CustomizedTables listar={props.listar}/>
                  </>:
                <Typography variant="h6">
                {props.listar}
               </Typography>
               }
             
            </div>
            

        </div>
    );

}
export default ListComponent;