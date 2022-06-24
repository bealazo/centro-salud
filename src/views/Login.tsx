import * as React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Typography} from '@material-ui/core';
import {Box} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';
import {useNavigate} from "react-router-dom";

import {useContext} from 'react';
import { StoreContext } from '../store/StoreProvider';
import { types } from '../store/StoreReducer';

function Login() {

  //Para pasar las opciones del menú al header
  const options=[
    "Inicio",
    "Contacto"    
  ];

  //Para navegar a otra página
  const navigate = useNavigate();

  //Para obtener el user del contexto
  const [store, dispatch] = useContext(StoreContext);
  const{user}=store;//usuario actual del estado global

  const [user_value, setUserValue] = React.useState<string>("");
  const [pass_value, setPassValue] = React.useState<string>("");
  const [show_error, setShowError] = React.useState<boolean>(false);
  
 
  const handleChangeUser = (event:React.ChangeEvent):void => {
    let target = event.target as HTMLInputElement;
    setUserValue(target.value);
  };
  const handleChangePass = (event:React.ChangeEvent):void => {
    let target = event.target as HTMLInputElement;
    setPassValue(target.value);
  };
  const handleClickSend = (event:React.MouseEvent):void => {
    event.preventDefault();
     
    /*ENVIAR A API a ver si son correctos, como no hay api creo un array de objetos users que pueden loguearse:*/
    const users=[{username: "Beatriz",
                password: "Bea*22"},
                {username: "Prueba",
                password: "Prueba*22"}]
    
   
    users.map((datauser,index) => 
    {
      if(datauser.username==user_value&&datauser.password==pass_value){
        console.log("user y pass correctos")
        setShowError(false);
     
        //Actualizar (modificar) el estado global
        dispatch({
          //Defino el tipo de la acción
          type:types.authLogin,
          //Usuario nuevo a actualizar en el estado global(si tuviera api paso lo que me de la api), los datos a modificar los envío en payload
          payload:{user: user_value}
        });

        localStorage.setItem("user",user_value);
        localStorage.setItem("password",pass_value);
       
         navigate("/gestion-centro");
      }
     
     else {
         setShowError(true)
         localStorage.clear()
       }    
    
    });
  
 
  };
    
    return (
    <div className="App">
       <header>
          <Header options={options} removemedicalicon={false}/>         
       </header>
  
      <main className="main-container-login">
        <section>
        <article className="container-form-login"> 
        <Typography variant="h5">
          Acceso área personal
        </Typography>
        <Box
          component="form"
         
        >
          <div  className="input-form">
          <TextField value={user_value} onChange={handleChangeUser} required  label="Usuario" variant="outlined" />
          </div>
      
       
          <div  className="input-form">
          <TextField value={pass_value} onChange={handleChangePass} required  type="password"  label="Contraseña" variant="outlined" />
          </div>
         {show_error?
              (<div>
            <Typography variant="subtitle1" color="secondary">
             Usuario y/o contraseña incorrectos
            </Typography>
            </div>):
            ("")           
           }
          <div  className="button-form">
          <Button onClick={handleClickSend} variant="contained" color="primary">Enviar</Button>
          </div>        
         
        </Box>     

        </article> 
        </section>
      </main>
        
      <footer>
        <Footer/>
      </footer>
       
      </div>
    );
  }
  
  export default Login;