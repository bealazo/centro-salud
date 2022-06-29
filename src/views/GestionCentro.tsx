import * as React from 'react';

import Header from "../components/Header";
import ListComponent from "../components/List";
import LateralMenu from "../components/LateralMenu";

import {useContext} from 'react';
import { StoreContext } from '../store/StoreProvider';
import { types } from '../store/StoreReducer';

import {Button} from '@material-ui/core';
import AddPatient from '../components/AddPatient';
import AddDoctor from '../components/AddDoctor';
import AddPersonal from '../components/AddPersonal';
import AddConsult from '../components/AddConsult';
import AddDepartment from '../components/AddDepartment';
import EditDoctor from '../components/EditDoctor';
import EditPatient from '../components/EditPatient';
import EditPersonal from '../components/EditPersonal';
import EditConsult from '../components/EditConsult';
import EditDepartment from '../components/EditDepartment';
import Charts from "../components/Charts";
import PrintIcon from '@material-ui/icons/Print';
import Grid from '@material-ui/core/Grid';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useMediaQuery } from "react-responsive";

//Interfaces para tipado
import Paciente from "../interfaces/Paciente";
import Personal from "../interfaces/Personal";
import Sanitario from "../interfaces/Sanitario";
import Departamento from "../interfaces/Departamento";
import Consulta from "../interfaces/Consulta";

 
const GestionCentro=()=> {

   //Manejar ancho de la pantalla para definir ancho del grafico
   const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)"
  });
  const isTablet = useMediaQuery({
    query: "(max-width: 1224px)"
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 786px)"
  });

  
  //Para obtener el user y el valor booleano de las listas(para saber cual pasar al componente ListComponent) y de las variables controlan que formulario para agregar y editar mostrar, todo esto lo obtengo del contexto
  const [store, dispatch] = useContext(StoreContext);
  const user:string=store.user.user;
  const listapac:boolean=store.listapac.listapac;
  const listasan:boolean=store.listasan.listasan;
  const listaper:boolean=store.listaper.listaper;
  const listacon:boolean=store.listacon.listacon;
  const listadep:boolean=store.listadep.listadep;
  const addpac:boolean = store.addpac.addpac;
  const addsan:boolean = store.addsan.addsan;
  const addper:boolean = store.addper.addper;
  const addcon:boolean = store.addcon.addcon;
  const adddep:boolean = store.adddep.adddep;
  const editpac:boolean = store.editpac.editpac;
  const editsan:boolean = store.editsan.editsan;
  const editper:boolean = store.editper.editper;
  const editcon:boolean = store.editcon.editcon;
  const editdep:boolean = store.editdep.editdep;
  const charts:boolean = store.charts.charts;
  const pacientes:Paciente[]=store.pacientes;
  const sanitarios:Sanitario[]=store.sanitarios;
  const personal:Personal[]=store.personal;
  const consultas:Consulta[]=store.consultas;
  const departamentos:Departamento[]=store.departamentos;
  
  //Para pasar las opciones del menú al header
  const options=[
     user  
    ];      
    
  //Para mostrar y/o ocultar listados de pacientes, sanitarios... 
  const handleListItem=(text:string):void=>{
      
    if(text=="PACIENTES")
    {
      //Actualizar (modificar) el estado global
      dispatch({
        //Defino el tipo de la acción
        type:types.changelistapac,
        //Valor a actualizar en el estado global(si tuviera api paso lo que me de la api), los datos a modificar los envío en payload
        payload:{listapac: true}
      });
    }
    if(text=="SANITARIOS")
    {  dispatch({type:types.changelistasan,  payload:{listasan: true}});}
    if(text=="PERSONAL")
    {  dispatch({type:types.changelistaper,  payload:{listaper: true}});}
    if(text=="CONSULTAS")
    {  dispatch({type:types.changelistacon,  payload:{listacon: true}});}
    if(text=="DEPARTAMENTOS")
    {  dispatch({type:types.changelistadep,  payload:{listadep: true}});}

    //Para mostrar los gráficos
    if(text=="GRÁFICOS"){
      console.log("entre a graficos")
      dispatch({type:types.showcharts,  payload:{charts: true}});
    }
  }

   
  //Para mostrar el formulario de agregar en dependencia del listado que este mostrando
  const handleClickNew=():void=>{
      if(listapac==true){
        dispatch({type:types.changeaddpac,  payload:{addpac: true}});
    
    }
    else if(listasan==true){
      dispatch({type:types.changeaddsan,  payload:{addsan: true}});
    }
    else if(listaper==true){
      dispatch({type:types.changeaddper,  payload:{addper: true}});
      
    }
    else if(listacon==true){
      dispatch({type:types.changeaddcon,  payload:{addcon: true}});
    }
    else if(listadep==true){
      dispatch({type:types.changeadddep,  payload:{adddep: true}});
    }
  }
  //Para imprimir la tabla en dependencia del listado que este mostrando
    const headingSanitarios=[  { title: "DNI", field: "dni", },
    { title: "NOMBRE", field: "nombre"},
    { title: "APELLIDOS", field: "apellidos"},
    { title: "TLFNO.", field: 'telefono'},
    { title: "CATEG.", field: "categoria"},
    { title: "ESP.", field: "especialidad"},
    { title: "ANTIG.", field: "antiguedad"},
    { title: "SALARIO", field: "salario"}];
    const headingPacientes=[  { title: "DNI", field: "dni", },
    { title: "NOMBRE", field: "nombre"},
    { title: "APELLIDOS", field: "apellidos"},
    { title: "TELÉFONO", field: 'telefono'},
    { title: "SEG.SOCIAL", field: "numero_seguridad_social"},
    { title: "HIST.CLÍNICA", field: "codigo_historia_clinica"},];
    const headingPersonal=[  { title: "DNI", field: "dni", },
    { title: "NOMBRE", field: "nombre"},
    { title: "APELL.", field: "apellidos"},
    { title: "TLFNO.", field: 'telefono'},
    { title: "CÓD.", field: "codigo_personal"},   
    { title: "ANTIG.", field: "antiguedad"},
    { title: "CARGO", field: "cargo"},
    { title: "SAL.", field: "salario"},
    { title: "DPTO", field: "codigo_dpto"},
    { title: "ASC.", field: "derecho_ascenso"}];
    const headingConsultas=[ { title: "NÚMERO DE CONSULTA", field: "numero_consulta"},
    { title: "CÓDIGO DE SERVICIO", field: "codigo_servicio"},
    { title: "NOMBRE DE SERVICIO", field: 'nombre_servicio'},
    { title: "PLANTA", field: "planta"}];
    const headingDepartamentos=[ { title: "CÓDIGO", field: "codigo_departamento"},
    { title: "NOMBRE", field: "nombre_departamento"}
  ];
    
    
  const handleClickPrint=()=>{
    if(listapac==true){
      const doc = new jsPDF()
      doc.text("Pacientes", 20, 10)     
      //@ts-ignore 
      doc.autoTable({
        theme: "grid",
        columns: headingPacientes.map((head) => ({ header:head.title, dataKey: head.field})),
        body: pacientes
      })
      doc.save('table.pdf')
    
  }
  else if(listasan==true){
    const doc = new jsPDF()
    doc.text("Sanitarios", 20, 10)
    //@ts-ignore 
    doc.autoTable({
      theme: "grid",
      columns: headingSanitarios.map((head) => ({ header:head.title, dataKey: head.field})),
      body: sanitarios
    })
    doc.save('table.pdf')
  }
  else if(listaper==true){
    const doc = new jsPDF()
      doc.text("Personal", 20, 10)
      //@ts-ignore 
      doc.autoTable({
        theme: "grid",
        columns: headingPersonal.map((head) => ({ header:head.title, dataKey: head.field})),
        body: personal
      })
      doc.save('table.pdf')
  }
  else if(listacon==true){
    const doc = new jsPDF()
      doc.text("Consultas", 20, 10)
      //@ts-ignore 
      doc.autoTable({
        theme: "grid",
        columns: headingConsultas.map((head) => ({ header:head.title, dataKey: head.field})),
        body: consultas
      })
      doc.save('table.pdf')
  }
  else if(listadep==true){
    const doc = new jsPDF()
    doc.text("Departamentos", 20, 10)
    //@ts-ignore 
    doc.autoTable({
      theme: "grid",
      columns: headingDepartamentos.map((head) => ({ header:head.title, dataKey: head.field})),
      body: departamentos
    })
    doc.save('table.pdf')
   
  }
}
   
  //Para mostrar el formulario de editar en dependencia del listado que este mostrando para modificar un elemento de la lista, lo paso
  // a traves de los componentes listComponent a CustomizedTables para poder obtener los parametros
  //que necesito(la fila de la lista que quiero modificar y el nombre de la lista a la que pertence dicha fila)
  const handleModify=(row:Record<string, any>, list_name:string):void=>{
     
    if(list_name=="sanitarios"&&listasan==true){     
       dispatch({type:types.change_row_edit_doctor,  payload:{row_edit_doctor: row}});
        dispatch({type:types.changeeditsan,  payload:{editsan: true}});
      
     }
     if(list_name=="pacientes"&&listapac==true){   
        
       dispatch({type:types.change_row_edit_pac,  payload:{row_edit_pac: row}});
       dispatch({type:types.changeeditpac,  payload:{editpac: true}});      
     
    }
    if(list_name=="personal"&&listaper==true){     
      dispatch({type:types.change_row_edit_per,  payload:{row_edit_per: row}});
       dispatch({type:types.changeeditper,  payload:{editper: true}});
     
    }
    if(list_name=="consultas"&&listacon==true){     
      dispatch({type:types.change_row_edit_con,  payload:{row_edit_con: row}});
       dispatch({type:types.changeeditcon,  payload:{editcon: true}});
     
    }
    if(list_name=="departamentos"&&listadep==true){     
      dispatch({type:types.change_row_edit_dep,  payload:{row_edit_dep: row}});
       dispatch({type:types.changeeditdep,  payload:{editdep: true}});
     
    }
  
  }
    return (
     
    <div className="App">
       <header>
          <Header options={options} removemedicalicon={true}/>        
       </header>
           
     
      {/**Renderizado del menú lateral, paso la funcion handleListItem para que este componente hijo LateralMenu modifique sus parametros de acuerdo al onclick*/}
        <LateralMenu handleListItem={handleListItem}/>
    
      
      <main className="main-container">
        <section>
        <article>
       {listapac|| listasan|| listaper|| listacon|| listadep?
        isDesktop?
        <Grid container spacing={1} className="group-button-new-print">
        <Grid item xs={1}>
          <Button  onClick={handleClickNew} variant="contained" color="primary">Nuevo</Button>
          </Grid>
          <Grid item xs={1}>
          <Button  onClick={handleClickPrint} variant="contained" ><PrintIcon></PrintIcon>Pdf</Button>
          </Grid>
        </Grid>:isMobile?
          <Grid container spacing={1} className="group-button-new-print">
          <Grid item xs={3}>
            <Button  onClick={handleClickNew} variant="contained" color="primary">Nuevo</Button>
            </Grid>
            <Grid item xs={3}>
            <Button  onClick={handleClickPrint} variant="contained" ><PrintIcon></PrintIcon>Pdf</Button>
            </Grid>
          </Grid>:null     
     
        :null
        }

        {listapac==true?<ListComponent listar="Pacientes" handleModify={handleModify}/>:
        listasan==true?<ListComponent listar="Sanitarios" handleModify={handleModify}/>:
        listaper==true?<ListComponent listar="Personal" handleModify={handleModify}/>:
        listacon==true?<ListComponent listar="Consultas" handleModify={handleModify}/>:
        listadep==true?<ListComponent listar="Departamentos" handleModify={handleModify}/>:
        charts==true?<Charts/>: 
        <p> Seleccione una opción del menú </p>
        }
        </article>
        <article>
        {
          addpac==true?<AddPatient/>:
          addsan==true?<AddDoctor/>:
          addper==true?<AddPersonal/>:
          addcon==true?<AddConsult/>:
          adddep==true?<AddDepartment/>:
          null
        }
        </article>
        <article>
        {
          editsan==true?<EditDoctor/>:  
          editpac==true?<EditPatient/>:   
          editper==true?<EditPersonal/>:   
          editcon==true?<EditConsult/>:    
          editdep==true?<EditDepartment/>: 
          null
        }
        </article>
         
        </section>
      </main>
        
     
      </div>
      
    );
  }
  
  export default GestionCentro;
  