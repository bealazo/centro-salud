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

import {useContext, useEffect} from 'react';
import { StoreContext } from '../store/StoreProvider';
import { types } from '../store/StoreReducer';
import {TextField} from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';

//Interfaces para tipado
import Paciente from "../interfaces/Paciente";
import Personal from "../interfaces/Personal";
import Sanitario from "../interfaces/Sanitario";
import Departamento from "../interfaces/Departamento";
import Consulta from "../interfaces/Consulta";


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

    //Tipado Props
    type Props = {
      handleModify:Function,
      listar: string,
    }
  //Componente para conformar las tablas
  const CustomizedTables=({handleModify, listar }:Props)=> {

  //Para obtener las listas del estado global
  const [store, dispatch,readListados,addListados,deleteListados] = useContext(StoreContext);
  const pacientes:Paciente[]=store.pacientes;
  const sanitarios:Sanitario[]=store.sanitarios;
  const personal:Personal[]=store.personal;
  const consultas:Consulta[]=store.consultas;
  const departamentos:Departamento[]=store.departamentos;
  
  //Variable de control para ejecutar el useEffect y obligar al componente a rerenderizar cuando se haya eliminado un elemento de las listas
   const [ctrl_del_lis, setCDL] = React.useState<boolean>(false);

  //Variables de control para mostrar resultados de búsqueda
  const [ctrl_search_pac, setCSP] = React.useState<boolean>(false);
  const [ctrl_search_san, setCSS] = React.useState<boolean>(false);
  const [ctrl_search_per, setCSPe] = React.useState<boolean>(false);
  const [ctrl_search_con, setCSC] = React.useState<boolean>(false);
  const [ctrl_search_dep, setCSD] = React.useState<boolean>(false);

  //Para obtener el listado actualizado del estado global, llamo a la función que se conecta a la API y actualiza el estado global, función implementada en
  //StoreProvider, pongo las variables de control para actualizar el listado cada vez que se haya eliminado un elemento, pongo la variable listar para rerenderizar
  //el componente cada vez que cambie el listado
  useEffect(() => {
     // ⬅️
    const getResponse = async () => {
      await readListados(listar);
      return;
    };
    getResponse();
  }, [ctrl_del_lis,listar]);

 
  //Para guardar el estado inicial de la lista para cuando la barra de búsqueda esté vacía
  const [oldListSan, setOldListSan] = React.useState<Array<Sanitario>>(sanitarios);
  const [oldListPac, setOldListPac] = React.useState<Array<Paciente>>(pacientes); 
  const [oldListPer, setOldListPer] = React.useState<Array<Personal>>(personal);
  const [oldListCon, setOldListCon] = React.useState<Array<Consulta>>(consultas);
  const [oldListDep, setOldListDep] = React.useState<Array<Departamento>>(departamentos);
  

  //Para eliminar un elemento de la lista
  const handleDelete=(row:Record<string, any>,list_name:string):void=>{
     
      if(list_name=="pacientes")      
      {
        setCDL(!ctrl_del_lis)
        deleteListados(row,list_name);
       
       }
      else if(list_name=="sanitarios")      
       {
          setCDL(!ctrl_del_lis)
          deleteListados(row,list_name);
         
        }
        else if(list_name=="personal")      
        {
          setCDL(!ctrl_del_lis)
          deleteListados(row,list_name);
          
         }
         else if(list_name=="consultas")      
        {
          setCDL(!ctrl_del_lis)
          deleteListados(row,list_name);
          
         }
         else if(list_name=="departamentos")      
         {
           setCDL(!ctrl_del_lis)
          deleteListados(row,list_name);
         
          }
  };

  //Para filtro de búsqueda de tabla sanitarios 
  const handleChangeSearchSan=(e:string,head:string):void=>{

     //Si escribo algo en la barra de búsqueda, pregunto si lo que escribo esta dentro de la columna correspondiente de acuerdo al head y filtro el resultado,
    //gurdandolo en una nueva lista
      if(e!==""){
        setCSS(true)
        let newList:Sanitario[]=[];
          if(head=="DNI"){
          newList=oldListSan.filter((sanitario:Sanitario)=>sanitario.dni.toLowerCase().includes(e.toLowerCase()));
        }
        else if(head=="NOMBRE"){
          newList=oldListSan.filter((sanitario:Sanitario)=>sanitario.nombre.toLowerCase().includes(e.toLowerCase()));
          }
        else if(head=="APELLIDOS"){
           newList=oldListSan.filter((sanitario:Sanitario)=>sanitario.apellidos.toLowerCase().includes(e.toLowerCase()));
          }
         else if(head=="TELÉFONO"){
            newList=oldListSan.filter((sanitario:Sanitario)=>sanitario.telefono.toString().includes(e));
         }
         else if(head=="CATEGORÍA"){
          newList=oldListSan.filter((sanitario:Sanitario)=>sanitario.categoria.toLowerCase().includes(e.toLowerCase()));
        }
       else if(head=="ESPECIALIDAD"){
         newList=oldListSan.filter((sanitario:Sanitario)=>sanitario.especialidad.toLowerCase().includes(e.toLowerCase()));
        }
        else if(head=="ANTIGUEDAD"){
          newList=oldListSan.filter((sanitario:Sanitario)=>sanitario.antiguedad.toString().includes(e));
          }
        else if(head=="SALARIO"){
          newList=oldListSan.filter((sanitario:Sanitario)=>sanitario.salario.toString().includes(e));
          }     
          
        //actualizo el estado global con la el resultado de la búsqueda
        setOldListSan(newList)
       
      }
      else{
        setOldListSan(sanitarios)
        setCSS(false)
      
      };
  }
  //Para filtro de búsqueda de tabla pacientes
  const handleChangeSearchPac=(e:string,head:string):void=>{
         
    //Si escribo algo en la barra de búsqueda, pregunto si lo que escribo esta dentro de la columna correspondiente de acuerdo al head y filtro el resultado,
    //gurdandolo en una nueva lista
      if(e!==""){
        setCSP(true)
        let newList:Paciente[]=[];
          if(head=="DNI"){
            newList=oldListPac.filter((paciente:Paciente)=>paciente.dni.toLowerCase().includes(e.toLowerCase()));
        }
        else if(head=="NOMBRE"){
          newList=oldListPac.filter((paciente:Paciente)=>paciente.nombre.toLowerCase().includes(e.toLowerCase()));
         }
        else if(head=="APELLIDOS"){
           newList=oldListPac.filter((paciente:Paciente)=>paciente.apellidos.toLowerCase().includes(e.toLowerCase()));
          }
         else if(head=="TELÉFONO"){
            newList=oldListPac.filter((paciente:Paciente)=>paciente.telefono.toString().includes(e));
         }
         else if(head=="NÚMERO SEG. SOCIAL"){
          newList=oldListPac.filter((paciente:Paciente)=>paciente.numero_seguridad_social.toString().includes(e));
        }
       else if(head=="CÓDIGO HIST. CLÍNICA"){
        newList=oldListPac.filter((paciente:Paciente)=>paciente.codigo_historia_clinica.toLowerCase().includes(e.toLowerCase()));
        }
       
          
        //actualizo el estado local con la el resultado de la búsqueda
        setOldListPac(newList)
       
      }
      else{
        setOldListPac(pacientes)
        setCSP(false)
      
      };
  }
   //Para filtro de búsqueda de tabla personal
   const handleChangeSearchPer=(e:string,head:string):void=>{

    //Si escribo algo en la barra de búsqueda, pregunto si lo que escribo esta dentro de la columna correspondiente de acuerdo al head y filtro el resultado,
    //gurdandolo en una nueva lista
      if(e!==""){
        setCSPe(true)
        let newList:Personal[]=[];
          if(head=="DNI"){
          newList=oldListPer.filter((personal:Personal)=>personal.dni.toLowerCase().includes(e.toLowerCase()));
        }
        else if(head=="NOMBRE"){
          newList=oldListPer.filter((personal:Personal)=>personal.nombre.toLowerCase().includes(e.toLowerCase()));
          }
        else if(head=="APELLIDOS"){
           newList=oldListPer.filter((personal:Personal)=>personal.apellidos.toLowerCase().includes(e.toLowerCase()));
          }
         else if(head=="TELÉFONO"){
            newList=oldListPer.filter((personal:Personal)=>personal.telefono.toString().includes(e));
         }
         else if(head=="CÓDIGO"){
          newList=oldListPer.filter((personal:Personal)=>personal.codigo_personal.toLowerCase().includes(e.toLowerCase()));
        }
       else if(head=="CARGO"){
        newList=oldListPer.filter((personal:Personal)=>personal.cargo.toLowerCase().includes(e.toLowerCase()));
        }
        else if(head=="ANTIGUEDAD"){
              newList=oldListPer.filter((personal:Personal)=>personal.antiguedad.toString().includes(e));
          }
        else if(head=="SALARIO"){
          newList=oldListPer.filter((personal:Personal)=>personal.salario.toString().includes(e));
          }  
        else if(head=="DPTO"){
            newList=oldListPer.filter((personal:Personal)=>personal.codigo_dpto.toString().includes(e));
            }  
        else if(head=="ASCENSO"){
              newList=oldListPer.filter((personal:Personal)=>personal.derecho_ascenso.toLowerCase().includes(e.toLowerCase()));
           }        
          
        //actualizo el estado global con la el resultado de la búsqueda
        setOldListPer(newList)
       
      }
      else{
        setOldListPer(personal)
        setCSPe(false)
      
      };
  }
   //Para filtro de búsqueda de tabla consultas
   const handleChangeSearchCon=(e:string,head:string):void=>{

    //Si escribo algo en la barra de búsqueda, pregunto si lo que escribo esta dentro de la columna correspondiente de acuerdo al head y filtro el resultado,
    //gurdandolo en una nueva lista
      if(e!==""){
        setCSC(true)
        let newList:Consulta[]=[];
          if(head=="NÚMERO DE CONSULTA"){
          newList=oldListCon.filter((consulta:Consulta)=>consulta.numero_consulta.toString().includes(e));
        }
        else if(head=="CÓDIGO DE SERVICIO"){
          newList=oldListCon.filter((consulta:Consulta)=>consulta.codigo_servicio.toString().includes(e));
          }
        else if(head=="NOMBRE DE SERVICIO"){
           newList=oldListCon.filter((consulta:Consulta)=>consulta.nombre_servicio.toLowerCase().includes(e.toLowerCase()));
          }
         else if(head=="PLANTA"){
            newList=oldListCon.filter((consulta:Consulta)=>consulta.planta.toString().includes(e));
         }
       
        //actualizo el estado global con la el resultado de la búsqueda
        setOldListCon(newList)
       
      }
      else{
        setOldListCon(consultas)
        setCSC(false)
      
      };
  }
   //Para filtro de búsqueda de tabla departamentos
   const handleChangeSearchDep=(e:string,head:string):void=>{

    //Si escribo algo en la barra de búsqueda, pregunto si lo que escribo esta dentro de la columna correspondiente de acuerdo al head y filtro el resultado,
    //gurdandolo en una nueva lista
      if(e!==""){
        setCSD(true)
        let newList:Departamento[]=[];
          if(head=="CÓDIGO"){
          newList=oldListDep.filter((departamento:Departamento)=>departamento.codigo_departamento.toString().includes(e));
        }
        else if(head=="NOMBRE"){
          newList=oldListDep.filter((departamento:Departamento)=>departamento.nombre_departamento.toLowerCase().includes(e.toLowerCase()));
          }
      
        //actualizo el estado global con la el resultado de la búsqueda
        setOldListDep(newList)
       
      }
      else{
        setOldListDep(departamentos)
        setCSD(false)
      
      };
  }
     
  const classes = useStyles();
    
    const headingSanitarios=[ "DNI","NOMBRE","APELLIDOS", "TELÉFONO", "CATEGORÍA", "ESPECIALIDAD", "ANTIGUEDAD", "SALARIO","ACCIONES" ];
    const headingPacientes=[ "DNI","NOMBRE","APELLIDOS", "TELÉFONO", "NÚMERO SEG. SOCIAL", "CÓDIGO HIST. CLÍNICA","ACCIONES"];
    const headingPersonal=[ "DNI","NOMBRE","APELLIDOS", "TELÉFONO", "CÓDIGO", "ANTIGUEDAD","CARGO", "SALARIO", "DPTO", "ASCENSO","ACCIONES"];
    const headingConsultas=[ "NÚMERO DE CONSULTA","CÓDIGO DE SERVICIO","NOMBRE DE SERVICIO", "PLANTA","ACCIONES"];
    const headingDepartamentos=[ "CÓDIGO","NOMBRE","ACCIONES"];

  
    
    if(listar=="Sanitarios"){
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
            {ctrl_search_san!==true?
            sanitarios.map((row:Sanitario) => (
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
            )):
            oldListSan.map((row:Sanitario) => (
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
  
  else if(listar=="Pacientes"){
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
              {ctrl_search_pac!==true?
              pacientes.map((row:Paciente) => (
                <StyledTableRow key={row.dni}>
                 
                  <StyledTableCell align="right">{row.dni}</StyledTableCell>
                  <StyledTableCell align="right">{row.nombre}</StyledTableCell>
                  <StyledTableCell align="right">{row.apellidos}</StyledTableCell>
                  <StyledTableCell align="right">{row.telefono}</StyledTableCell>
                  <StyledTableCell align="right">{row.numero_seguridad_social}</StyledTableCell>
                  <StyledTableCell align="right">{row.codigo_historia_clinica}</StyledTableCell>
                  <StyledTableCell align="right">  <IconButton aria-label="edit" onClick={()=>handleModify(row,"pacientes")}>  <Icon color="primary" fontSize="small">create</Icon></IconButton><IconButton aria-label="delete" onClick={()=>handleDelete(row,"pacientes")}>  <Icon color="secondary" fontSize="small">delete</Icon></IconButton></StyledTableCell>
                </StyledTableRow>
              )):
              oldListPac.map((row:Paciente) => (
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
    else if(listar=="Personal"){
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
                {ctrl_search_per!==true?
                personal.map((row:Personal) => (
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
                )):
                oldListPer.map((row:Personal) => (
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
      else if(listar=="Consultas"){
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
                {ctrl_search_con!==true?
                consultas.map((row:Consulta) => (
                  <StyledTableRow key={row.numero_consulta}>
                   
                    <StyledTableCell align="center">{row.numero_consulta}</StyledTableCell>
                    <StyledTableCell align="center">{row.codigo_servicio}</StyledTableCell>
                    <StyledTableCell align="right">{row.nombre_servicio}</StyledTableCell>
                    <StyledTableCell align="right">{row.planta}</StyledTableCell>
                    <StyledTableCell align="right">  <IconButton aria-label="edit" onClick={()=>handleModify(row,"consultas")}>  <Icon color="primary" fontSize="small">create</Icon></IconButton><IconButton aria-label="delete" onClick={()=>handleDelete(row,"consultas")}>  <Icon color="secondary" fontSize="small">delete</Icon></IconButton></StyledTableCell>
                  </StyledTableRow>
                )):
                oldListCon.map((row:Consulta) => (
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
      else if(listar=="Departamentos"){
        
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
                {ctrl_search_dep!==true?
                departamentos.map((row:Departamento) => (
                  <StyledTableRow key={row.codigo_departamento}>
                   
                    <StyledTableCell align="right">{row.codigo_departamento}</StyledTableCell>
                    <StyledTableCell align="right">{row.nombre_departamento}</StyledTableCell>
                    <StyledTableCell align="right">  <IconButton aria-label="edit" onClick={()=>handleModify(row,"departamentos")}>  <Icon color="primary" fontSize="small">create</Icon></IconButton><IconButton aria-label="delete" onClick={()=>handleDelete(row,"departamentos")}>  <Icon color="secondary" fontSize="small">delete</Icon></IconButton></StyledTableCell>
                  
                  </StyledTableRow>
                )):
                oldListDep.map((row:Departamento) => (
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