import * as React from 'react';
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import banner from "../images/banner.jpg";

function Login() {

    
    
    return (
    <div className="App">
       <header>
          <Header/>
          <Banner banner={banner} title="Centro de Salud Privado" subtitle="...Tu salud nos importa..."/>  
       </header>
  
      <main className="main-container">
        <section>
         <p>LOGIN</p>
        </section>
      </main>
        
      <footer>
        <Footer/>
      </footer>
       
      </div>
    );
  }
  
  export default Login;
  