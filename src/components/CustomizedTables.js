import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Icon } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

import {useContext} from 'react';
import { StoreContext } from '../store/StoreProvider';
import { types } from '../store/StoreReducer';
import {TextField} from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';


//Estilos de las tablas
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#DEEDEE",
      color: theme.palette.common.black,
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
  //Para la palabra del buscar
  const [word, setWord] = React.useState("");
  const [filterDisplay, setFilterDisplay] = React.useState(sanitarios);

  //Para obtener el método implementado y pasado desde la vista GestionCentro para modificar un elemento de la lista y poder aqui pasarle
  //los parametros que espera(la fila que quiero modificar y el nombre de la lista a la que pertenece)
  const handleModify=props.handleModify;

  //Para eliminar un elemento de la lista
  const handleDelete=(row,list_name)=>{
     
      if(list_name=="pacientes")      
      {
       var new_pacientes=pacientes.filter((item) => item.dni !== row.dni);
        //envio la accion en el payload al store reducer para modificar el estado global
        //OJO: ME SIRVE EL MISMO TIPO QUE PARA AÑADIR NUEVOS ITEMS A LA LISTA, PUESTO QUE LA ACCION PARA ESE TIPO ES MODIFICAR EL LISTADO EXISTENTE SUSTITUYENDOLO 
        //CON EL NUEVO LISTADO PASADO
           dispatch({type:types.addpaclistapac,  payload:{pacientes:new_pacientes}});
       }
      else if(list_name=="sanitarios")      
       {
        var new_sanitarios=sanitarios.filter((item) => item.dni !== row.dni);
         
            dispatch({type:types.addsanlistasan,  payload:{sanitarios:new_sanitarios}});
        }
        else if(list_name=="personal")      
        {
         var new_personal=personal.filter((item) => item.dni !== row.dni);
          
             dispatch({type:types.addperlistaper,  payload:{personal:new_personal}});
         }
         else if(list_name=="consultas")      
        {
         var new_consultas=consultas.filter((item) => item.numero_consulta !== row.numero_consulta);
          
             dispatch({type:types.addconlistacon,  payload:{consultas:new_consultas}});
         }
         else if(list_name=="departamentos")      
         {
          var new_departamentos=departamentos.filter((item) => item.codigo_departamento !== row.codigo_departamento);
           
              dispatch({type:types.adddeplistadep,  payload:{departamentos:new_departamentos}});
          }
  };

  //Para filtro de búsqueda
  const handleChangeSearch=(e)=>{
      let oldList=sanitarios.map(sanitario=>{
        return {dni:sanitario.dni.toLowerCase(),nombre:sanitario.nombre.toLowerCase(),
          apellidos:sanitario.apellidos.toLowerCase(),telefono:sanitario.telefono,categoria:sanitario.categoria.toLowerCase(),
          especialidad:sanitario.especialidad.toLowerCase(),antiguedad:sanitario.antiguedad,salario:sanitario.salario}
      })

      if(e!==""){
        let newList=[];
        setWord(e);
        newList=oldList.filter(sanitario=>sanitario.dni.includes(word.toLowerCase()));
        setFilterDisplay(newList);
      }
      else{setFilterDisplay(sanitarios)};
  }
 
     
  const classes = useStyles();
    
    const headingSanitarios=[ "DNI","NOMBRE","APELLIDOS", "TELÉFONO", "CATEGORÍA", "ESPECIALIDAD", "ANTIGUEDAD", "SALARIO","ACCIONES" ];
    const headingPacientes=[ "DNI","NOMBRE","APELLIDOS", "TELÉFONO", "NÚMERO SEG. SOCIAL", "CÓDIGO HIST. CLÍNICA","ACCIONES"];
    const headingPersonal=[ "DNI","NOMBRE","APELLIDOS", "TELÉFONO", "CÓDIGO PERSONAL", "ANTIGUEDAD","CARGO", "SALARIO", "CÓD. DEPARTAMENTO", "DERECHO ASCENSO","ACCIONES"];
    const headingConsultas=[ "NÚMERO DE CONSULTA","CÓDIGO DE SERVICIO","NOMBRE DE SERVICIO", "PLANTA","ACCIONES"];
    const headingDepartamentos=[ "CÓDIGO DEPARTAMENTO","NOMBRE DE DEPARTAMENTO","ACCIONES"];

  
    
    if(props.listar=="Sanitarios"){
    return (
      <>
  
     <TableContainer className={classes.table} component={Paper}>
    
        <Table  aria-label="customized table">
          <TableHead>
            <TableRow>
            {headingSanitarios.map((head) => (
           
                <StyledTableCell align="right">  
              {head}  <TextField
                id="input-with-icon-textfield"
             
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                     <Icon color="primary" fontSize="small">search</Icon>
                    </InputAdornment>
                  ),
                }}
             
                color="primary"
                onChange={e=>handleChangeSearch(e.target.value)} 
              /></StyledTableCell>
              ))
              }
            
           </TableRow>
          </TableHead>
          <TableBody>
            {filterDisplay.map((row) => (
              <StyledTableRow key={row.dni}>
               
               <StyledTableCell align="right">{row.dni}</StyledTableCell>
               <StyledTableCell align="right">{row.nombre}</StyledTableCell>
               <StyledTableCell align="right">{row.apellidos}</StyledTableCell>
               <StyledTableCell align="right">{row.telefono}</StyledTableCell>
                <StyledTableCell align="right">{row.categoria}</StyledTableCell>
                <StyledTableCell align="right">{row.especialidad}</StyledTableCell>
                <StyledTableCell align="right">{row.antiguedad}</StyledTableCell>
                <StyledTableCell align="right">{row.salario}</StyledTableCell>
                <StyledTableCell align="right">  <IconButton aria-label="edit" onClick={()=>handleModify(row,"sanitarios")}>  <Icon color="primary" fontSize="small">create</Icon></IconButton><IconButton aria-label="delete" onClick={()=>handleDelete(row,"sanitarios")}>  <Icon color="secondary" fontSize="small">delete</Icon></IconButton></StyledTableCell>
               </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </>
    
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
                  <StyledTableCell align="right">  <IconButton aria-label="edit" onClick={()=>handleModify(row,"pacientes")}>  <Icon color="primary" fontSize="small">create</Icon></IconButton><IconButton aria-label="delete" onClick={()=>handleDelete(row,"pacientes")}>  <Icon color="secondary" fontSize="small">delete</Icon></IconButton></StyledTableCell>
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
                    <StyledTableCell align="right">  <IconButton aria-label="edit" onClick={()=>handleModify(row,"personal")}>  <Icon color="primary" fontSize="small">create</Icon></IconButton><IconButton aria-label="delete" onClick={()=>handleDelete(row,"personal")}>  <Icon color="secondary" fontSize="small">delete</Icon></IconButton></StyledTableCell>
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
                    <StyledTableCell align="right">  <IconButton aria-label="edit" onClick={()=>handleModify(row,"consultas")}>  <Icon color="primary" fontSize="small">create</Icon></IconButton><IconButton aria-label="delete" onClick={()=>handleDelete(row,"consultas")}>  <Icon color="secondary" fontSize="small">delete</Icon></IconButton></StyledTableCell>
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
                    <StyledTableCell align="right">  <IconButton aria-label="edit" onClick={()=>handleModify(row,"departamentos")}>  <Icon color="primary" fontSize="small">create</Icon></IconButton><IconButton aria-label="delete" onClick={()=>handleDelete(row,"departamentos")}>  <Icon color="secondary" fontSize="small">delete</Icon></IconButton></StyledTableCell>
                  
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