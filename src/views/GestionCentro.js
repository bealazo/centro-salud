import * as React from 'react';
import {useEffect}from 'react';

import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import banner from "../images/banner.jpg";

function GestionCentro() {
    
    const [user_name, setUserName] = React.useState("");

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {         
            setUserName(loggedInUser);
        }
      }, []);

 
    return (
     
    <div className="App">
       <header>
          <Header/>
          <Banner banner={banner} title="Centro de Salud Privado" subtitle="...Tu salud nos importa..."/>  
       </header>
  
      <main className="main-container">
        <section>
       <p> Bienvenido {user_name} </p>
        </section>
      </main>
        
      <footer>
        <Footer/>
      </footer>
       
      </div>
    );
  }
  
  export default GestionCentro;
  