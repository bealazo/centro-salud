import * as React from 'react';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


import CssBaseline from '@material-ui/core/CssBaseline';
 
 //ICONOS MENU LATERAL
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import GroupIcon from '@material-ui/icons/Group';
import ContactsIcon from '@material-ui/icons/Contacts';
import HealingIcon from '@material-ui/icons/Healing';
import ListAltIcon from '@material-ui/icons/ListAlt';



{/**Componente menú lateral*/}
function LateralMenu(props){

const handleListItem=props.handleListItem;

//Estilos del menú
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

return(
    <div className={classes.root}>
    <CssBaseline />
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

);

}
export default LateralMenu;