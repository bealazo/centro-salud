import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import {useContext} from 'react';
import { StoreContext } from '../store/StoreProvider';


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
        marginTop:"5vh"
      },
    });


  //Componente para conformar las tablas
  function CustomizedTables(props) {

     //Para obtener las listas del estado global
  const [store, dispatch] = useContext(StoreContext);
  const{pacientes}=store;
  const{sanitarios}=store;
  const{personal}=store;
  const{consultas}=store;
  const{departamentos}=store;
 
     
  const classes = useStyles();
    
    const headingSanitarios=[ "DNI","NOMBRE","APELLIDOS", "TELÉFONO", "CATEGORÍA", "ESPECIALIDAD", "ANTIGUEDAD", "SALARIO" ];
    const headingPacientes=[ "DNI","NOMBRE","APELLIDOS", "TELÉFONO", "NÚMERO SEG. SOCIAL", "CÓDIGO HIST. CLÍNICA"];
    const headingPersonal=[ "DNI","NOMBRE","APELLIDOS", "TELÉFONO", "CÓDIGO PERSONAL", "ANTIGUEDAD","CARGO", "SALARIO", "CÓD. DEPARTAMENTO", "DERECHO ASCENSO"];
    const headingConsultas=[ "NÚMERO DE CONSULTA","CÓDIGO DE SERVICIO","NOMBRE DE SERVICIO", "PLANTA"];
    const headingDepartamentos=[ "CÓDIGO DEPARTAMENTO","NOMBRE DE DEPARTAMENTO"];
  
    
    if(props.listar=="Sanitarios"){
    return (
      <TableContainer className={classes.table} component={Paper}>
        <Table  aria-label="customized table">
          <TableHead>
            <TableRow>
            {headingSanitarios.map((head) => (
              <StyledTableCell align="right">{head}</StyledTableCell>))}
           </TableRow>
          </TableHead>
          <TableBody>
            {sanitarios.map((row) => (
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
        <TableContainer className={classes.table} component={Paper}>
          <Table  aria-label="customized table">
            <TableHead>
              <TableRow>
              {headingPacientes.map((head) => (
              <StyledTableCell align="right">{head}</StyledTableCell>))}
              </TableRow>
            </TableHead>
            <TableBody>
              {pacientes.map((row) => (
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
    else if(props.listar=="Personal"){
        return (
          <TableContainer className={classes.table} component={Paper}>
            <Table  aria-label="customized table">
              <TableHead>
                <TableRow>
                {headingPersonal.map((head) => (
                <StyledTableCell align="right">{head}</StyledTableCell>))}
                </TableRow>
              </TableHead>
              <TableBody>
                {personal.map((row) => (
                  <StyledTableRow key={row.dni}>
                   
                    <StyledTableCell align="right">{row.dni}</StyledTableCell>
                    <StyledTableCell align="right">{row.nombre}</StyledTableCell>
                    <StyledTableCell align="right">{row.apellidos}</StyledTableCell>
                    <StyledTableCell align="right">{row.telefono}</StyledTableCell>
                    <StyledTableCell align="right">{row.codigo_personal}</StyledTableCell>
                    <StyledTableCell align="right">{row.antiguedad}</StyledTableCell>
                    <StyledTableCell align="right">{row.cargo}</StyledTableCell>
                    <StyledTableCell align="right">{row.salario}</StyledTableCell>
                    <StyledTableCell align="right">{row.codigo_dpto}</StyledTableCell>
                    <StyledTableCell align="right">{row.derecho_ascenso}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );
      }
      else if(props.listar=="Consultas"){
        return (
          <TableContainer  className={classes.table} component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                {headingConsultas.map((head) => (
                <StyledTableCell align="right">{head}</StyledTableCell>))}
                </TableRow>
              </TableHead>
              <TableBody>
                {consultas.map((row) => (
                  <StyledTableRow key={row.numero_consulta}>
                   
                    <StyledTableCell align="center">{row.numero_consulta}</StyledTableCell>
                    <StyledTableCell align="center">{row.codigo_servicio}</StyledTableCell>
                    <StyledTableCell align="right">{row.nombre_servicio}</StyledTableCell>
                    <StyledTableCell align="right">{row.planta}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );
      }
      else if(props.listar=="Departamentos"){
        return (
          <TableContainer className={classes.table} component={Paper}>
            <Table  aria-label="customized table">
              <TableHead>
                <TableRow>
                {headingDepartamentos.map((head) => (
                <StyledTableCell align="right">{head}</StyledTableCell>))}
                </TableRow>
              </TableHead>
              <TableBody>
                {departamentos.map((row) => (
                  <StyledTableRow key={row.codigo_departamento}>
                   
                    <StyledTableCell align="right">{row.codigo_departamento}</StyledTableCell>
                    <StyledTableCell align="right">{row.nombre_departamento}</StyledTableCell>
                  
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );
      }
    else return(<p>No hay datos que mostrar</p>)
  }

  export default CustomizedTables;