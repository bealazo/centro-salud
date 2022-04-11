import * as React from 'react';
import {useEffect}from 'react';

import { Routes, Route, Navigate } from 'react-router-dom'
import Home from "../views/Home";
import Contacto from "../views/Contacto";
import Login from "../views/Login";
import GestionCentro from "../views/GestionCentro";



function Layout(props) {  
    
  return (
   
      <Routes>
         <Route exact path="/" element={<Home/>}/>
        
        <Route exact path="/home" element={<Home/>}/>
      
        <Route exact path="/contacto" element={<Contacto/>}/>
        
        <Route exact path="/login" element={<Login/>}/>
       
       {/*SI TENGO UN USUARIO LOGUEADO VOY A GESTION CENTRO, DE LO CONTRARIO REDIRECCIONO A LOGIN */}
        <Route exact path="/gestion-centro" element={ props.user ? <GestionCentro/> : <Navigate to="/login" />} />
       
      </Routes>
   
  );
}

export default Layout;