import * as React from 'react';
//import '../App.css'; NO HACE FALTA, YA LA IMPORTÉ EN APP
import {Typography} from '@material-ui/core';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


//Estilos de las tablas
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
    table: {
      minWidth: "auto",
    },
  });

//Datos de las tablas(CUANDO TENGA CONEXION A BD, RECOGERLOS DE BD)
function createDataPacientes(dni, nombre, apellidos, telefono, numero_seguridad_social, codigo_historia_clinica) {
  return { dni, nombre, apellidos, telefono,numero_seguridad_social,codigo_historia_clinica };
}
const rowsPacientes = [
    createDataPacientes('29033641M', "Caridad", "Ballesteros Castillo", 625789102, 247295332921, "0000000211"),
    createDataPacientes('51310395V',"Constantino", "Diaz Barrios", 755861389, 165651962891, "0000000212"),
    createDataPacientes('72088633D', "Enrique", "Conde Huerta", 605483756,214215400790, "0000000213"),
    createDataPacientes('75763067D', "Nadia","Amaya Barbero", 714436150, 148175851090,"0000000214"),
 ];
 function createDataSanitarios(dni, nombre, apellidos, telefono, categoria, especialidad,antiguedad,salario) {
    return { dni, nombre, apellidos, telefono,categoria,especialidad,antiguedad,salario };
  }
  const rowsSanitarios = [
    createDataSanitarios('20569836Q', "Mariano", "Cardenas Oliver", 693840304, "Médico", "Psicología", 5, 36000),
    createDataSanitarios('30210818L',"Bartolome", "Piñero Andreu", 645813149, "Médico", "Medicina Interna", 2,36000),
    createDataSanitarios('68215574N', "Sonia", "Ferreira Becerra", 689929226,"Enfermera", "Cardiología",3,24000),
    createDataSanitarios('88103187P', "Ana Isabel","Mata Costa", 632121414, "Médico","Oftalmología",6,36000),
   ];


//Conformando la tabla
function CustomizedTables(props) {
  const classes = useStyles();
  
  const headingSanitarios=[ "DNI","NOMBRE","APELLIDOS", "TELÉFONO", "CATEGORÍA", "ESPECIALIDAD", "ANTIGUEDAD", "SALARIO" ];
  const headingPacientes=[ "DNI","NOMBRE","APELLIDOS", "TELÉFONO", "NÚMERO SEG. SOCIAL", "CÓDIGO HIST. CLÍNICA"];

  if(props.listar=="Sanitarios"){
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
          {headingSanitarios.map((head) => (
            <StyledTableCell align="right">{head}</StyledTableCell>))}
         </TableRow>
        </TableHead>
        <TableBody>
          {rowsSanitarios.map((row) => (
            <StyledTableRow key={row.dni}>
             
              <StyledTableCell align="right">{row.dni}</StyledTableCell>
              <StyledTableCell align="right">{row.nombre}</StyledTableCell>
              <StyledTableCell align="right">{row.apellidos}</StyledTableCell>
              <StyledTableCell align="right">{row.telefono}</StyledTableCell>
              <StyledTableCell align="right">{row.categoria}</StyledTableCell>
              <StyledTableCell align="right">{row.especialidad}</StyledTableCell>
              <StyledTableCell align="right">{row.antiguedad}</StyledTableCell>
              <StyledTableCell align="right">{row.salario}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

else if(props.listar=="Pacientes"){
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
            {headingPacientes.map((head) => (
            <StyledTableCell align="right">{head}</StyledTableCell>))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsPacientes.map((row) => (
              <StyledTableRow key={row.dni}>
               
                <StyledTableCell align="right">{row.dni}</StyledTableCell>
                <StyledTableCell align="right">{row.nombre}</StyledTableCell>
                <StyledTableCell align="right">{row.apellidos}</StyledTableCell>
                <StyledTableCell align="right">{row.telefono}</StyledTableCell>
                <StyledTableCell align="right">{row.numero_seguridad_social}</StyledTableCell>
                <StyledTableCell align="right">{row.codigo_historia_clinica}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  else return(<p>No hay datos que mostrar</p>)
}

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
                <Typography variant="h6">
                {props.listar}
               </Typography>
               }
             
            </div>
            

        </div>
    );

}
export default ListComponent;