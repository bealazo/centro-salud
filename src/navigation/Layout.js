import * as React from 'react';

import { Switch, Route } from 'react-router-dom'
import Home from "../views/Home";
import Contacto from "../views/Contacto";
import Login from "../views/Login";



function Layout() {
    
  return (
   
      <Switch>
         <Route exact path="/">
          <Home/>
        </Route>  
        <Route exact path="/home">
          <Home/>
        </Route>  
        <Route exact path="/contacto">
          <Contacto/>
        </Route>  
        <Route exact path="/login">
          <Login/>
        </Route>  
      </Switch>
   
  );
}

export default Layout;