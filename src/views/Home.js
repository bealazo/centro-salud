//import '../App.css'; NO HACE FALTA, YA LA IMPORTÉ EN APP

/*AÑADIDOS*/
import * as React from 'react';
import {Typography} from '@material-ui/core';
//COMPONENTES PROPIOS
import TeamMember from "../components/TeamMember";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Socials from "../components/Socials";
//IMAGENES IMPORTADAS YA QUE ESTOY EN LOCAL
import avatar1 from "../images/avatar1.jpg";
import avatar2 from "../images/avatar2.jpg";
import avatar3 from "../images/avatar3.jpg";
import avatar4 from "../images/avatar4.jpg";
import banner from "../images/banner.jpg";
import bannersocials from "../images/bannersocials.jpg";



function Home() {

   //Para pasar las opciones del menú al header
   const options=[
    "Inicio",
    "Contacto",
    "Iniciar sesión"
  ];
   
  //Miembros del equipo
  const equipo= [
      {
        "name":"Beatriz Lazo",
        "description":"Soy muy profesional y me gusta atender a mis pacientes con mucho cariño, escucharles y hacerles sentir mejor.",
        "avatar":avatar1
      },
      {
        "name":"Yanelis Serrano",
        "description":"Soy muy profesional y me gusta atender a mis pacientes con mucho cariño, escucharles y hacerles sentir mejor.",
        "avatar":avatar2
      },
      {
        "name":"Javier Rodriguez",
        "description":"Soy muy profesional y me gusta atender a mis pacientes con mucho cariño, escucharles y hacerles sentir mejor.",
        "avatar":avatar3
      },
      {
        "name":"David Cabe",
        "description":"Soy muy profesional y me gusta atender a mis pacientes con mucho cariño, escucharles y hacerles sentir mejor.",
        "avatar":avatar4
      },

    ]
   
  
  return (

  <div className="App">
     <header>
        <Header options={options}/>
        <Banner banner={banner} title="Centro de Salud Privado" subtitle="...Tu salud nos importa..."/>  
     </header>

    <main className="main-container">
      <section>
        <article className="container-history">
        <Typography variant="h4">
          Historia
        </Typography>
        <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
        </article> 

        <article className="container-team">
        <Typography className="title-who" variant="h4">
          ¿Quiénes Somos?
        </Typography>

       {equipo.map((miembro,index) =>  <TeamMember key={index} position={index} avatar={miembro.avatar} name={miembro.name} description={miembro.description}/>)}
  
        </article>              
      </section>

      <section>

        <Banner banner={bannersocials}/>
        <Socials/>

      </section>
    </main>
      
    <footer>
      <Footer/>
    </footer>
     
    </div>
  );
}

export default Home;
