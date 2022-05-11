import * as React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom'
import Home from "../views/Home";
import Contacto from "../views/Contacto";
import Login from "../views/Login";
import GestionCentro from "../views/GestionCentro";
import AddPatient from "../views/AddPatient";

import {useContext} from 'react';
import { StoreContext } from '../store/StoreProvider';


function Layout() {  
 
  //Para obtener el user del contexto
  const [store, dispatch] = useContext(StoreContext);
  const{user}=store;
  console.log(user)

  
    
  return (
   
      <Routes>
         <Route exact path="/" element={<Home/>}/>
        
        <Route exact path="/home" element={<Home/>}/>
      
        <Route exact path="/contacto" element={<Contacto/>}/>
    
        <Route exact path="/login" element={<Login/>}/>
    
      
        {/*SI TENGO UN USUARIO LOGUEADO VOY A GESTION CENTRO, DE LO CONTRARIO REDIRECCIONO A LOGIN */}
        <Route exact path="/gestion-centro" element={ user!=""? <GestionCentro/> : <Navigate to="/login" />} />

        <Route path="/gestion-centro/nuevo-paciente"  element={ user!=""? <AddPatient/> : <Navigate to="/login" />}/>
        
      </Routes>
     
      
  );
}

export default Layout;


