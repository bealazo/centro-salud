import './App.css';

/*AÑADIDOS*/
import * as React from 'react';

import { Switch, Route } from 'react-router-dom'
import Home from "./Home";
import Contacto from "./Contacto";
import Login from "./Login";


function App() {
    
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

export default App;
