import * as React from 'react';
import '../App.css';
import { useState } from 'react';
//import { Link } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Icon } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Menu } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { NavLink, Link } from 'react-router-dom';


function Header(){

     //Opciones del Menú
     const options = [
       "Inicio",
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

 

    return(

      <div className="App-header">
      <Grid item xs={2}>
      <Icon fontSize="large">medical_information</Icon>
      </Grid>

        <Grid className="menu-container" item xs={10}>

       {options.map((option,index) =>        
        <Grid key={index} item xs={2}>
         {option=="Inicio"?
              <NavLink
              to="/home"
              style={isActive => ({
                color: isActive ? "#61dafb" : "white",
                textDecoration: 'none' 
              })}
            >
             {option} 
             </NavLink>
           
          : option=="Contacto"?
          <NavLink
          to="/contacto"
          style={isActive => ({
            color: isActive ? "#61dafb" : "white",
            textDecoration: 'none' 
          })}
        >
         {option} 
         </NavLink>
         :  <NavLink
         to="/login"
         style={isActive => ({
           color: isActive ? "#61dafb" : "white",
           textDecoration: 'none' 
         })}
       >
         {option}
        </NavLink>
          }
       
        </Grid>)}     
            
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
     
        
          {options.map((option,index) =>     
         <div>
          {option=="Inicio"?
          <Link to="/home" style={{ textDecoration: 'none', display: 'block', color:"#011a35" }}>
          <MenuItem key={index}>
          {option}
          </MenuItem>
        </Link>
          :option=="Contacto"?
           <Link to="/contacto" style={{ textDecoration: 'none', display: 'block', color:"#011a35" }}>
          <MenuItem key={index}>
          {option}
          </MenuItem>
        </Link>
        : <Link to="/login" style={{ textDecoration: 'none', display: 'block', color:"#011a35" }} >
        <MenuItem key={index}>
           {option}
        </MenuItem>
          </Link>
          }
          </div>
          )} 
    
    
      </Menu>
    
    </Grid>
    </div>
    );

}

export default Header;