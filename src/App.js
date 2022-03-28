import './App.css';

/*AÑADIDOS*/
import * as React from 'react';
import { useState } from 'react';
import { Link } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Icon } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Menu } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import {Typography} from '@material-ui/core';
import { Avatar } from '@material-ui/core';

//imagenes
import avatar1 from "./images/avatar1.jpg";
import avatar2 from "./images/avatar2.jpg";
import avatar3 from "./images/avatar3.jpg";
import avatar4 from "./images/avatar4.jpg";

function App() {

  //Opciones del Menú
  const options = [
   "Quiénes Somos",
   "Contacto",
   "Login"
  ];
  
  //Despliegue menú en movil
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="App">
      <header>

      <div className="App-header">
      <Grid item xs={2}>
      <Icon fontSize="large">medical_information</Icon>
      </Grid>

        <Grid className="menu-container" item xs={10}>
         
         <Grid xs={2}>
          <Link href="#" color="inherit"> Quiénes Somos</Link>
          </Grid>
          <Grid xs={2}>
          <Link href="#" color="inherit"> Contacto</Link>
          </Grid>
          <Grid xs={2}>
          <Link href="#" color="inherit"> Login </Link>
          </Grid>
        
        </Grid>

      

    <Grid className="menu-movil-container" item xs={10}>
      <Button
        aria-haspopup="true"
        aria-controls="simple-menu"       
        color="inherit"
        onClick={handleClick}

      >
        <Icon>list</Icon>
      </Button>
      <Menu
         id="simple-menu"
         anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}       
      >
        <MenuItem>Quiénes Somos</MenuItem>
        <MenuItem>Contacto</MenuItem>
        <MenuItem>Login</MenuItem>
      </Menu>
    
    </Grid>
    </div>

    <div className="container-banner">
    <div className="container-banner-text">
    <Typography variant="h3">
        Centro de salud privado
    </Typography>
    <Typography variant="h5">
        "...Tu salud nos importa..."
    </Typography>
    </div>
    </div>

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
        <Typography variant="h4">
          ¿Quiénes Somos?
        </Typography>

      <div className="container-member">
            <img src={avatar1} className="avatar"/>
            <div className="member-text">
            <Typography variant="h6">
            Nombre y apellidos
            </Typography>        
            <Typography variant="body1" gutterBottom>
          Soy muy profesional y me gusta atender a mis pacientes con mucho cariño, escucharles y hacerles sentir mejor.
          </Typography>
            </div>
          </div>
     
       <div className="member-wrapper-rigth">
          <div className="container-member">
          <div className="member-text">
            <Typography variant="h6">
            Nombre y apellidos
            </Typography>        
            <Typography variant="body1" gutterBottom>
          Soy muy profesional y me gusta atender a mis pacientes con mucho cariño, escucharles y hacerles sentir mejor.
          </Typography>
            </div>       
            <img src={avatar2} className="avatar"/>
         
          </div>
      </div>
      
        <div className="container-member">
          <img src={avatar3} className="avatar"/>
          <div className="member-text">
          <Typography variant="h6">
           Nombre y apellidos
          </Typography>        
          <Typography variant="body1" gutterBottom>
        Soy muy profesional y me gusta atender a mis pacientes con mucho cariño, escucharles y hacerles sentir mejor.
        </Typography>
          </div>
        </div>
      <div className="member-wrapper-rigth">
        <div className="container-member">
        <div className="member-text">
          <Typography variant="h6">
           Nombre y apellidos
          </Typography>        
          <Typography variant="body1" gutterBottom>
        Soy muy profesional y me gusta atender a mis pacientes con mucho cariño, escucharles y hacerles sentir mejor.
        </Typography>
          </div>
          <img src={avatar4} className="avatar"/>
        
        </div>
      </div>
        

        </article>        
        
             
      </section>
    </main>
      
    
     
    </div>
  );
}

export default App;
