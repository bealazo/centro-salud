//import '../App.css'; NO HACE FALTA, YA LA IMPORTÉ EN APP

/*AÑADIDOS*/
import * as React from 'react';
import {Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
//COMPONENTES PROPIOS
import TeamMember from "../components/TeamMember";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Socials from "../components/Socials";
import MediaCard from "../components/Card";
//IMAGENES IMPORTADAS YA QUE ESTOY EN LOCAL
import avatar1 from "../images/avatar8.png";
import avatar2 from "../images/avatar9.png";
import avatar3 from "../images/avatar10.png";
import avatar4 from "../images/avatar11.png";
import home1 from "../images/home1.png";
import banner from "../images/banner.jpg";
import bannersocials from "../images/bannersocials.jpg";
import card1 from "../images/banner4.jpg";
import card2 from "../images/banner8.jpg";
import card3 from "../images/banner9.jpg";
import { useMediaQuery } from "react-responsive";



function Home() {

   //Manejar ancho de la pantalla para definir ancho del grafico
   const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)"
  });
  const isTablet = useMediaQuery({
    query: "(max-width: 1224px)"
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 786px)"
  });


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
        "avatar":avatar4
      },
      {
        "name":"Yanelis Serrano",
        "description":"Soy muy profesional y me gusta atender a mis pacientes con mucho cariño, escucharles y hacerles sentir mejor.",
        "avatar":avatar1
      },
      {
        "name":"Javier Rodriguez",
        "description":"Soy muy profesional y me gusta atender a mis pacientes con mucho cariño, escucharles y hacerles sentir mejor.",
        "avatar":avatar3
      },
      {
        "name":"Leyre Velasco",
        "description":"Soy muy profesional y me gusta atender a mis pacientes con mucho cariño, escucharles y hacerles sentir mejor.",
        "avatar":avatar2
      },

    ]
   
  
  return (

  <div className="App">
     <header>
        <Header options={options} removemedicalicon={false}/>
        <Banner banner={banner} title="Centro de salud" subtitle="...tu salud nos importa..."/>  
     </header>

    <main className="main-container">
      <section>
        <article className="container-history">
        <Typography variant="h4" style={{paddingBottom:"5%"}}>
          ¿Quiénes somos?
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
      <article className="container-home-image">
           <img src={home1} className="home-image"/>
        </article>

        <article>
        <Typography variant="h4" style={{paddingBottom:"5%"}}>
          ¿Qué nos distingue?
        </Typography>
        </article>
        {isDesktop? <div  className="container-cards-home">
          <Grid container spacing={1}>
            <Grid item xs={4}>
           <MediaCard title="Profesionalidad" imagen={card1} texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."/>
           </Grid>
           <Grid item xs={4}>
          <MediaCard title="Empatía"imagen={card2} texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."/>
        </Grid>
           <Grid item xs={4}>
          <MediaCard title="Dedicación" imagen={card3} texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."/>
        </Grid>
        </Grid>
        </div>: isMobile?
         <div  className="container-cards-home-movil">
         <Grid container spacing={1}>
           <Grid item xs={12}>
          <MediaCard title="Profesionalidad" imagen={card1} texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
       unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
       dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."/>
          </Grid>
          <Grid item xs={12}>
         <MediaCard title="Empatía"imagen={card2} texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
       unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
       dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."/>
       </Grid>
          <Grid item xs={12}>
         <MediaCard title="Dedicación" imagen={card3} texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
       unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
       dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."/>
       </Grid>
       </Grid>
       </div>:null}
       
       

        <article className="container-team">
        <Typography className="title-who" variant="h4">
         Nuestro equipo  
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
