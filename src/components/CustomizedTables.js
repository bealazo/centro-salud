import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


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
     function createDataPersonal(dni, nombre, apellidos, telefono, codigo_personal, antiguedad,cargo,salario,codigo_dpto,derecho_ascenso) {
        return { dni, nombre, apellidos, telefono,codigo_personal,antiguedad,cargo,salario,codigo_dpto,derecho_ascenso };
      }
      const rowsPersonal = [
        createDataPersonal('03429966E', "Enric", "Rivera Valls", 706706114, "000P3", 2, "Ing. Informático", 20400, 226,"NO"),
        createDataPersonal('24676502D', "Maria Trinidad", "Fraile Paez", 666172546, "000P4", 5, "Auxiliar", 15000, 227,"SI"),
        createDataPersonal('29244719N', "Tamara", "Roca Sastre", 721285234, "000P1", 10, "Secretaria", 15000, 224,"SI"),
        createDataPersonal('52170183L', "Saturnino", "Guerra Carvajal", 720945589, "000P2", 1, "Electricista", 15000, 223,"NO"),
       ];
       function createDataConsultas(numero_consulta,codigo_servicio,nombre_servicio,planta) {
        return { numero_consulta,codigo_servicio, nombre_servicio,planta};
      }
      const rowsConsultas = [
        createDataConsultas(1,123, "Pediatría",1),
        createDataConsultas(2,123, "Pediatría",1),
        createDataConsultas(3,123, "Pediatría",1),
        createDataConsultas(4,124,"Geriatría",2),
        createDataConsultas(5, 124,"Geriatría",2),
        createDataConsultas(6,124,"Geriatría",2),
        createDataConsultas(7,125, "Psicología",1),
        createDataConsultas(8,125, "Psicología",1),
        createDataConsultas(9,125, "Psicología",1),
        createDataConsultas(10,126, "Oftalmología",2),
        createDataConsultas(11, 126, "Oftalmología",2),
        createDataConsultas(12,126, "Oftalmología",2),
        createDataConsultas(13,127, "Cardiología",1),
        createDataConsultas(14,127, "Cardiología",1),
        createDataConsultas(15,127, "Cardiología",1),
        createDataConsultas(16,128, "Medicina Interna",3),
        createDataConsultas(17, 128, "Medicina Interna",3),
        createDataConsultas(18, 128, "Medicina Interna",3),
        createDataConsultas(19,129, "Reumatología",3),
        createDataConsultas(20,129, "Reumatología",3),
        createDataConsultas(21,129, "Reumatología",3),
        createDataConsultas(22,130, "Neumología",3),
        createDataConsultas(23, 130, "Neumología",3),
        createDataConsultas(24,130, "Neumología",3),
        

       ];
       function createDataDepartamentos(codigo_departamento,nombre_departamento) {
        return { codigo_departamento,nombre_departamento};
      }
      const rowsDepartamentos = [
        createDataDepartamentos(223, "Mantenimiento"),
        createDataDepartamentos(224, "Recursos Humanos"),
        createDataDepartamentos(226, "Informática"),
        createDataDepartamentos(227, "Administración")
      
       ];
  
  
  //Componente para conformar las tablas
  function CustomizedTables(props) {
    const classes = useStyles();
    
    const headingSanitarios=[ "DNI","NOMBRE","APELLIDOS", "TELÉFONO", "CATEGORÍA", "ESPECIALIDAD", "ANTIGUEDAD", "SALARIO" ];
    const headingPacientes=[ "DNI","NOMBRE","APELLIDOS", "TELÉFONO", "NÚMERO SEG. SOCIAL", "CÓDIGO HIST. CLÍNICA"];
    const headingPersonal=[ "DNI","NOMBRE","APELLIDOS", "TELÉFONO", "CÓDIGO PERSONAL", "ANTIGUEDAD","CARGO", "SALARIO", "CÓD. DEPARTAMENTO", "DERECHO ASCENSO"];
    const headingConsultas=[ "NÚMERO DE CONSULTA","CÓDIGO DE SERVICIO","NOMBRE DE SERVICIO", "PLANTA"];
    const headingDepartamentos=[ "CÓDIGO DEPARTAMENTO","NOMBRE DE DEPARTAMENTO"];
  
    
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
    else if(props.listar=="Personal"){
        return (
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                {headingPersonal.map((head) => (
                <StyledTableCell align="right">{head}</StyledTableCell>))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsPersonal.map((row) => (
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
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                {headingConsultas.map((head) => (
                <StyledTableCell align="right">{head}</StyledTableCell>))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsConsultas.map((row) => (
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
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                {headingDepartamentos.map((head) => (
                <StyledTableCell align="right">{head}</StyledTableCell>))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsDepartamentos.map((row) => (
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