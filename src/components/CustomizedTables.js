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
      backgroundColor: "#EFEDEB",
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

  //Para guardar el estado inicial de la lista para cuando la barra de búsqueda esté vacía
  const [oldListSan, setOldListSan] = React.useState(sanitarios);
  const [oldListPac, setOldListPac] = React.useState(pacientes);
  const [oldListPer, setOldListPer] = React.useState(personal);
  const [oldListCon, setOldListCon] = React.useState(consultas);
  const [oldListDep, setOldListDep] = React.useState(departamentos);
  

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
           setOldListPac(new_pacientes);
       }
      else if(list_name=="sanitarios")      
       {
        var new_sanitarios=sanitarios.filter((item) => item.dni !== row.dni);
         
            dispatch({type:types.addsanlistasan,  payload:{sanitarios:new_sanitarios}});
            setOldListSan(new_sanitarios);
        }
        else if(list_name=="personal")      
        {
         var new_personal=personal.filter((item) => item.dni !== row.dni);
          
             dispatch({type:types.addperlistaper,  payload:{personal:new_personal}});
             setOldListPer(new_personal);
         }
         else if(list_name=="consultas")      
        {
         var new_consultas=consultas.filter((item) => item.numero_consulta !== row.numero_consulta);
          
             dispatch({type:types.addconlistacon,  payload:{consultas:new_consultas}});
             setOldListCon(new_consultas);
         }
         else if(list_name=="departamentos")      
         {
          var new_departamentos=departamentos.filter((item) => item.codigo_departamento !== row.codigo_departamento);
           
              dispatch({type:types.adddeplistadep,  payload:{departamentos:new_departamentos}});
              setOldListDep(new_departamentos);
          }
  };

  //Para filtro de búsqueda de tabla sanitarios
  const handleChangeSearchSan=(e,head)=>{

    //Guardo la lista actual
       let oldList1=sanitarios;
    //Si escribo algo en la barra de búsqueda, pregunto si lo que escribo esta dentro de la columna correspondiente de acuerdo al head y filtro el resultado,
    //gurdandolo en una nueva lista
      if(e!==""){
        let newList=[];
          if(head=="DNI"){
          newList=oldList1.filter(sanitario=>sanitario.dni.toLowerCase().includes(e.toLowerCase()));
        }
        else if(head=="NOMBRE"){
          newList=oldList1.filter(sanitario=>sanitario.nombre.toLowerCase().includes(e.toLowerCase()));
          }
        else if(head=="APELLIDOS"){
           newList=oldList1.filter(sanitario=>sanitario.apellidos.toLowerCase().includes(e.toLowerCase()));
          }
         else if(head=="TELÉFONO"){
            newList=oldList1.filter(sanitario=>sanitario.telefono.toString().includes(e));
         }
         else if(head=="CATEGORÍA"){
          newList=oldList1.filter(sanitario=>sanitario.categoria.toLowerCase().includes(e.toLowerCase()));
        }
       else if(head=="ESPECIALIDAD"){
        newList=oldList1.filter(sanitario=>sanitario.especialidad.toLowerCase().includes(e.toLowerCase()));
        }
        else if(head=="ANTIGUEDAD"){
              newList=oldList1.filter(sanitario=>sanitario.antiguedad.toString().includes(e));
          }
        else if(head=="SALARIO"){
          newList=oldList1.filter(sanitario=>sanitario.salario.toString().includes(e));
          }     
          
        //actualizo el estado global con la el resultado de la búsqueda
        dispatch({type:types.addsanlistasan, payload:{sanitarios:newList}});
      
      }
      else{
     
        dispatch({type:types.addsanlistasan, payload:{sanitarios:oldListSan}});
       
      };
  }
  //Para filtro de búsqueda de tabla pacientes
  const handleChangeSearchPac=(e,head)=>{

    //Guardo la lista actual
       let oldList1=pacientes;
    //Si escribo algo en la barra de búsqueda, pregunto si lo que escribo esta dentro de la columna correspondiente de acuerdo al head y filtro el resultado,
    //gurdandolo en una nueva lista
      if(e!==""){
        let newList=[];
          if(head=="DNI"){
          newList=oldList1.filter(paciente=>paciente.dni.toLowerCase().includes(e.toLowerCase()));
        }
        else if(head=="NOMBRE"){
          newList=oldList1.filter(paciente=>paciente.nombre.toLowerCase().includes(e.toLowerCase()));
          }
        else if(head=="APELLIDOS"){
           newList=oldList1.filter(paciente=>paciente.apellidos.toLowerCase().includes(e.toLowerCase()));
          }
         else if(head=="TELÉFONO"){
            newList=oldList1.filter(paciente=>paciente.telefono.toString().includes(e));
         }
         else if(head=="NÚMERO SEG. SOCIAL"){
          newList=oldList1.filter(paciente=>paciente.numero_seguridad_social.toString().includes(e));
        }
       else if(head=="CÓDIGO HIST. CLÍNICA"){
        newList=oldList1.filter(paciente=>paciente.codigo_historia_clinica.toLowerCase().includes(e.toLowerCase()));
        }
       
          
        //actualizo el estado global con la el resultado de la búsqueda
        dispatch({type:types.addpaclistapac, payload:{pacientes:newList}});
      
      }
      else{
     
        dispatch({type:types.addpaclistapac, payload:{pacientes:oldListPac}});
       
      };
  }
   //Para filtro de búsqueda de tabla personal
   const handleChangeSearchPer=(e,head)=>{

    //Guardo la lista actual
       let oldList1=personal;
    //Si escribo algo en la barra de búsqueda, pregunto si lo que escribo esta dentro de la columna correspondiente de acuerdo al head y filtro el resultado,
    //gurdandolo en una nueva lista
      if(e!==""){
        let newList=[];
          if(head=="DNI"){
          newList=oldList1.filter(personal=>personal.dni.toLowerCase().includes(e.toLowerCase()));
        }
        else if(head=="NOMBRE"){
          newList=oldList1.filter(personal=>personal.nombre.toLowerCase().includes(e.toLowerCase()));
          }
        else if(head=="APELLIDOS"){
           newList=oldList1.filter(personal=>personal.apellidos.toLowerCase().includes(e.toLowerCase()));
          }
         else if(head=="TELÉFONO"){
            newList=oldList1.filter(personal=>personal.telefono.toString().includes(e));
         }
         else if(head=="CÓDIGO"){
          newList=oldList1.filter(personal=>personal.codigo_personal.toLowerCase().includes(e.toLowerCase()));
        }
       else if(head=="CARGO"){
        newList=oldList1.filter(personal=>personal.cargo.toLowerCase().includes(e.toLowerCase()));
        }
        else if(head=="ANTIGUEDAD"){
              newList=oldList1.filter(personal=>personal.antiguedad.toString().includes(e));
          }
        else if(head=="SALARIO"){
          newList=oldList1.filter(personal=>personal.salario.toString().includes(e));
          }  
        else if(head=="DPTO"){
            newList=oldList1.filter(personal=>personal.codigo_dpto.toString().includes(e));
            }  
        else if(head=="ASCENSO"){
              newList=oldList1.filter(personal=>personal.derecho_ascenso.toLowerCase().includes(e.toLowerCase()));
           }        
          
        //actualizo el estado global con la el resultado de la búsqueda
        dispatch({type:types.addperlistaper, payload:{personal:newList}});
      
      }
      else{
     
        dispatch({type:types.addperlistaper, payload:{personal:oldListPer}});
       
      };
  }
   //Para filtro de búsqueda de tabla consultas
   const handleChangeSearchCon=(e,head)=>{

    //Guardo la lista actual
       let oldList1=consultas;
    //Si escribo algo en la barra de búsqueda, pregunto si lo que escribo esta dentro de la columna correspondiente de acuerdo al head y filtro el resultado,
    //gurdandolo en una nueva lista
      if(e!==""){
        let newList=[];
          if(head=="NÚMERO DE CONSULTA"){
          newList=oldList1.filter(consulta=>consulta.numero_consulta.toString().includes(e));
        }
        else if(head=="CÓDIGO DE SERVICIO"){
          newList=oldList1.filter(consulta=>consulta.codigo_servicio.toString().includes(e));
          }
        else if(head=="NOMBRE DE SERVICIO"){
           newList=oldList1.filter(consulta=>consulta.nombre_servicio.toLowerCase().includes(e.toLowerCase()));
          }
         else if(head=="PLANTA"){
            newList=oldList1.filter(consulta=>consulta.planta.toString().includes(e));
         }
       
        //actualizo el estado global con la el resultado de la búsqueda
        dispatch({type:types.addconlistacon, payload:{consultas:newList}});
      
      }
      else{
     
        dispatch({type:types.addconlistacon, payload:{consultas:oldListCon}});
       
      };
  }
   //Para filtro de búsqueda de tabla departamentos
   const handleChangeSearchDep=(e,head)=>{

    //Guardo la lista actual
       let oldList1=departamentos;
    //Si escribo algo en la barra de búsqueda, pregunto si lo que escribo esta dentro de la columna correspondiente de acuerdo al head y filtro el resultado,
    //gurdandolo en una nueva lista
      if(e!==""){
        let newList=[];
          if(head=="CÓDIGO"){
          newList=oldList1.filter(departamento=>departamento.codigo_departamento.toString().includes(e));
        }
        else if(head=="NOMBRE"){
          newList=oldList1.filter(departamento=>departamento.nombre_departamento.toLowerCase().includes(e.toLowerCase()));
          }
      
        //actualizo el estado global con la el resultado de la búsqueda
        dispatch({type:types.adddeplistadep, payload:{departamentos:newList}});
      
      }
      else{
     
        dispatch({type:types.adddeplistadep, payload:{departamentos:oldListDep}});
       
      };
  }
     
  const classes = useStyles();
    
    const headingSanitarios=[ "DNI","NOMBRE","APELLIDOS", "TELÉFONO", "CATEGORÍA", "ESPECIALIDAD", "ANTIGUEDAD", "SALARIO","ACCIONES" ];
    const headingPacientes=[ "DNI","NOMBRE","APELLIDOS", "TELÉFONO", "NÚMERO SEG. SOCIAL", "CÓDIGO HIST. CLÍNICA","ACCIONES"];
    const headingPersonal=[ "DNI","NOMBRE","APELLIDOS", "TELÉFONO", "CÓDIGO", "ANTIGUEDAD","CARGO", "SALARIO", "DPTO", "ASCENSO","ACCIONES"];
    const headingConsultas=[ "NÚMERO DE CONSULTA","CÓDIGO DE SERVICIO","NOMBRE DE SERVICIO", "PLANTA","ACCIONES"];
    const headingDepartamentos=[ "CÓDIGO","NOMBRE","ACCIONES"];

  
    
    if(props.listar=="Sanitarios"){
    return (
      <>
  
     <TableContainer className={classes.table} component={Paper}>
    
        <Table  aria-label="customized table">
          <TableHead>
            <TableRow>
            {headingSanitarios.map((head) => (
           
                <StyledTableCell align="right"> {head} 
                {head!="ACCIONES"?<TextField
                id="input-with-icon-textfield"
             
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                     <Icon color="primary" fontSize="small">search</Icon>
                    </InputAdornment>
                  ),
                }}
             
                color="primary"
                onChange={e=>handleChangeSearchSan(e.target.value,head)} 
              />:null} </StyledTableCell>
              ))
              }
            
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
              <StyledTableCell align="right">{head}
              {head!="ACCIONES"?<TextField
              id="input-with-icon-textfield"
           
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                   <Icon color="primary" fontSize="small">search</Icon>
                  </InputAdornment>
                ),
              }}
           
              color="primary"
              onChange={e=>handleChangeSearchPac(e.target.value,head)} 
            />:null}</StyledTableCell>))}
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
                <StyledTableCell align="right">{head}
                {head!="ACCIONES"?<TextField
                id="input-with-icon-textfield"
             
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                     <Icon color="primary" fontSize="small">search</Icon>
                    </InputAdornment>
                  ),
                }}
             
                color="primary"
                onChange={e=>handleChangeSearchPer(e.target.value,head)} 
              />:null}</StyledTableCell>))}
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
                <StyledTableCell align="right">{head}
                {head!="ACCIONES"?<TextField
                id="input-with-icon-textfield"
             
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                     <Icon color="primary" fontSize="small">search</Icon>
                    </InputAdornment>
                  ),
                }}
             
                color="primary"
                onChange={e=>handleChangeSearchCon(e.target.value,head)} 
              />:null}</StyledTableCell>))}
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
                <StyledTableCell align="right">{head}
                {head!="ACCIONES"?<TextField
                id="input-with-icon-textfield"
             
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                     <Icon color="primary" fontSize="small">search</Icon>
                    </InputAdornment>
                  ),
                }}
             
                color="primary"
                onChange={e=>handleChangeSearchDep(e.target.value,head)} 
              />:null}</StyledTableCell>))}
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