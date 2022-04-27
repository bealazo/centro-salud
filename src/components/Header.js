import * as React from 'react';
//import '../App.css'; NO HACE FALTA, YA LA IMPORTÉ EN APP
import { useState } from 'react';
//import { Link } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Icon } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Menu } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { NavLink, Link } from 'react-router-dom';



import {useContext} from 'react';
import { StoreContext } from '../store/StoreProvider';
import { types } from '../store/StoreReducer';

import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

//PARA MENÚ DESPLEGABLE CON ESTILOS CUANDO SE LOGUEA UN USER
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.common.white,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.info,
      },
    },
  },
}))(MenuItem);
//FIN DE CODIGO PARA MENU DESPLEGABLE CON ESTILOS CUANDO SE LOGUEA UN USER

function Header(props){

     //Opciones del Menú
     const options =props.options;
     
     //Para obtener el user del contexto
  const [store, dispatch] = useContext(StoreContext);
  const{user}=store;

    //Despliegue menú en ordenador 
    const [anchorElPC, setAnchorElPC] = useState(null);
    const handleClickPC = (event) => {
        setAnchorElPC(event.currentTarget);
    };

    const handleClosePC = () => {
        setAnchorElPC(null);
    };


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
             style={({isActive}) => ({color: isActive ? "#61dafb" : "white" , textDecoration: 'none' })} className={({isActive}) => `nav_link${isActive ? " active" : ""}`} 
          >
             {option} 
             </NavLink>
           
          : option=="Contacto"?
          <NavLink
          to="/contacto"
          style={({isActive}) => ({color: isActive ? "#61dafb" : "white" , textDecoration: 'none' })} className={({isActive}) => `nav_link${isActive ? " active" : ""}`} 
        >
         {option} 
         </NavLink>
         : option=="Login"? <NavLink
         to="/login"
         style={({isActive}) => ({color: isActive ? "#61dafb" : "white" , textDecoration: 'none' })} className={({isActive}) => `nav_link${isActive ? " active" : ""}`} 
       >
         {option}
        </NavLink>
        : /*Si no es ninguna de las opciones anteriores(como cuando lo llamo desde Gestion Centro una vez que el user se loguea, renderizo lo siguiente) */
         <>
           <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        color="inherit"
        onClick={handleClickPC}
      >
        <p> {user.user} </p>
           <Icon fontSize="large">account_circle</Icon>
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorElPC}
        keepMounted
        open={Boolean(anchorElPC)}
        onClose={handleClosePC}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <ExitToAppIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Cerrar Sesión"  sx={{ color: "white" }} onClick={()=>{dispatch({type: types.authLogout})}}/>
        </StyledMenuItem>
       </StyledMenu>
    </div>
           
      </>
    
          }
       
        </Grid>)}             
        </Grid>
      

    <Grid className="menu-movil-container" item xs={10}>
      {/*Si hay un user logueado lo que recibe el header en las props y en ese caso muestro el menu con cierre de sesion */}
      {options==user.user?
        <>
           <Button
        aria-controls="customized-menu-movil"
        aria-haspopup="true"
        color="inherit"
        onClick={handleClick}
      >
        <p> {user.user} </p>
           <Icon fontSize="large">account_circle</Icon>
      </Button>
      <StyledMenu
        id="customized-menu-movil"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <ExitToAppIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Cerrar Sesión"  sx={{ color: "white" }} onClick={()=>{dispatch({type: types.authLogout})}}/>
        </StyledMenuItem>
       </StyledMenu>
      </>:
        <>
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
         <div key={index}>
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
      </>
      }
    
    </Grid>
    </div>
    );

}

export default Header;