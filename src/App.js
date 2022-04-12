import './App.css';

/*AÑADIDOS*/
import * as React from 'react';
import Layout from './navigation/Layout';
import StoreProvider from './store/StoreProvider';



function App() {

 
  return (
    /*Envuelvo toda la app en un provider para manejar un estado global*/
          <StoreProvider>
          <Layout/>
          </StoreProvider>
         
  );
}

export default App;
