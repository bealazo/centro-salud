import * as React from 'react';

import Header from "../components/Header";
import Footer from "../components/Footer";
import ListComponent from "../components/List";

import {useContext} from 'react';
import { StoreContext } from '../store/StoreProvider';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Typography} from '@material-ui/core';

//ICONOS MENU LATERAL
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import GroupIcon from '@material-ui/icons/Group';
import ContactsIcon from '@material-ui/icons/Contacts';
import HealingIcon from '@material-ui/icons/Healing';
import ListAltIcon from '@material-ui/icons/ListAlt';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


 
function GestionCentro() {
    
  //Para obtener el user del contexto
  const [store, dispatch] = useContext(StoreContext);
  const{user}=store;

  //Para pasar las opciones del menú al header
  const options=[
     user.user
   
    ];


    //Para el menú lateral
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
  //Para mostrar y/o ocultar listados de pacientes, sanitarios...
  const [listapac, setListaPac] = React.useState(false);
  const [listasan, setListaSan] = React.useState(false);
  const [listaper, setListaPer] = React.useState(false);
  const [listacon, setListaCon] = React.useState(false);
  const [listadep, setListaDep] = React.useState(false);

  const handleListItem=(text)=>{

    if(text=="PACIENTES")
    {setListaPac(true); setListaSan(false); setListaPer(false); setListaCon(false); setListaDep(false);}
    if(text=="SANITARIOS")
    {setListaPac(false); setListaSan(true); setListaPer(false); setListaCon(false); setListaDep(false);}
    if(text=="PERSONAL")
    {setListaPac(false); setListaSan(false); setListaPer(true); setListaCon(false); setListaDep(false);}
    if(text=="CONSULTAS")
    {setListaPac(false); setListaSan(false); setListaPer(false); setListaCon(true); setListaDep(false);}
    if(text=="DEPARTAMENTOS")
    {setListaPac(false); setListaSan(false); setListaPer(false); setListaCon(false); setListaDep(true);}
  }


    return (
     
    <div className="App">
       <header>
          <Header options={options}/>        
       </header>
      

       <div className={classes.root}>
      <CssBaseline />
     
     {/**Renderizado del menú lateral*/}
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
        {open?
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        :null}
        <Divider />
        <List>
          {['PACIENTES', 'SANITARIOS', 'PERSONAL'].map((text, index) => (
            <ListItem button key={text} onClick={()=>handleListItem(text)}>
              <ListItemIcon>{text=="PACIENTES" ? <AssignmentIndIcon /> :text=="SANITARIOS"? <GroupIcon />:<ContactsIcon/>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['CONSULTAS', 'DEPARTAMENTOS'].map((text, index) => (
            <ListItem button key={text}onClick={()=>handleListItem(text)}>
              <ListItemIcon>{text=="CONSULTAS" ? <HealingIcon /> : <ListAltIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      </div>

      
      <main className="main-container">
        <section>
        <Typography variant="h5">
        Bienvenido {user.user} 
       </Typography>
      
        {listapac==true?<ListComponent listar="Pacientes"/>:
        listasan==true?<ListComponent listar="Sanitarios"/>:
        listaper==true?<ListComponent listar="Personal"/>:
        listacon==true?<ListComponent listar="Consultas"/>:
        listadep==true?<ListComponent listar="Departamentos"/>:
        <p> Seleccione una opción del menú </p>
        }
    
        </section>
      </main>
        
      <footer>
        <Footer/>
      </footer>
      </div>
      
    );
  }
  
  export default GestionCentro;
  