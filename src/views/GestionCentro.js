import * as React from 'react';

import Header from "../components/Header";
import Footer from "../components/Footer";
import ListComponent from "../components/List";
import LateralMenu from "../components/LateralMenu";

import {useContext} from 'react';
import { StoreContext } from '../store/StoreProvider';
import { types } from '../store/StoreReducer';

import {Button} from '@material-ui/core';
import {useNavigate} from "react-router-dom";

 
function GestionCentro() {
    
  //Para obtener el user y el valor booleano de las listas(para saber cual pasar al componente ListComponent) del contexto
  const [store, dispatch] = useContext(StoreContext);
  const{user}=store;
  const{listapac}=store;
  const{listasan}=store;
  const{listaper}=store;
  const{listacon}=store;
  const{listadep}=store;

  
  //Para pasar las opciones del menú al header
  const options=[
     user.user
   
    ];   
    
  //Para navegar a otra página
  const navigate = useNavigate();

  
  //Para mostrar y/o ocultar listados de pacientes, sanitarios... 
  const handleListItem=(text)=>{
      
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
  }

  const handleClickNew=()=>{
      if(listapac.listapac==true){
      navigate("/gestion-centro/nuevo-paciente");
    }
  }


    return (
     
    <div className="App">
       <header>
          <Header options={options}/>        
       </header>
           
     
      {/**Renderizado del menú lateral, paso la funcion handleListItem para que este componente hijo LateralMenu modifique sus parametros de acuerdo al onclick*/}
        <LateralMenu handleListItem={handleListItem}/>
    
      
      <main className="main-container">
        <section>
     
       {listapac|| listasan|| listaper|| listacon|| listadep?
        <div  className="button-new">
          <Button  onClick={handleClickNew} variant="contained" color="primary">Nuevo</Button>
         
        </div>
        :null
        }

        {listapac.listapac==true?<ListComponent listar="Pacientes"/>:
        listasan.listasan==true?<ListComponent listar="Sanitarios"/>:
        listaper.listaper==true?<ListComponent listar="Personal"/>:
        listacon.listacon==true?<ListComponent listar="Consultas"/>:
        listadep.listadep==true?<ListComponent listar="Departamentos"/>:
        <p> Seleccione una opción del menú </p>
        }
    
        </section>
      </main>
        
      <footer>
        <Footer/>
      </footer>
      </div>
      
    );
  }
  
  export default GestionCentro;
  