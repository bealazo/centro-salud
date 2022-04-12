import * as React from 'react';

import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import banner from "../images/banner.jpg";
import {Button} from '@material-ui/core';

import {useContext} from 'react';
import { StoreContext } from '../store/StoreProvider';
import { types } from '../store/StoreReducer';

function GestionCentro() {
    
  //Para obtener el user del contexto
  const [store, dispatch] = useContext(StoreContext);
  const{user}=store;

    return (
     
    <div className="App">
       <header>
          <Header/>
          <Banner banner={banner} title="Centro de Salud Privado" subtitle="...Tu salud nos importa..."/>  
       </header>
  
      <main className="main-container">
        <section>
       <p> Bienvenido {user.user} </p>
       <div  className="button-form">
          <Button onClick={()=>{dispatch({type: types.authLogout})}} variant="contained" color="primary">Cerrar Sesión</Button>
        </div>
        </section>
      </main>
        
      <footer>
        <Footer/>
      </footer>
       
      </div>
    );
  }
  
  export default GestionCentro;
  