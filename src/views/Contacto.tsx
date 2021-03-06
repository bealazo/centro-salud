import * as React from 'react';
import {Typography} from '@material-ui/core';
import {Box} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

import banner from "../images/banner.jpg";
import contact1 from "../images/contact1.png";

import Map from "../components/Map";

const Contacto=()=> {

   //Para pasar las opciones del menú al header
   const options=[
    "Inicio",
    "Contacto",
    "Iniciar sesión"
  ];
   
  const [name_value, setNameValue] = React.useState<string>("");
  const [phone_value, setPhoneValue] = React.useState<number>(0);
  const [email_value, setEmailValue] = React.useState<string>("");
  const [message_value, setMessageValue] = React.useState<string>("");
  /*Para mostrar u ocultar el mensaje de envío exitoso */
  const [show_message, setShowMessage] = React.useState<boolean>(false);
   /*Para mostrar u ocultar el mensaje de error de envío */
   const [show_error_message, setShowErrorMessage] = React.useState<boolean>(false);


  const handleChangeName = (event:React.ChangeEvent):void => {
    let target = event.target as HTMLInputElement;
    setNameValue(target.value);
  };
  const handleChangePhone = (event:React.ChangeEvent):void => {
    let target = event.target as HTMLInputElement;
    setPhoneValue(Number(target.value));
  };
  const handleChangeEmail = (event:React.ChangeEvent):void => {
    let target = event.target as HTMLInputElement;
    setEmailValue(target.value);
  };
  const handleChangeMessage = (event:React.ChangeEvent):void => {
    let target = event.target as HTMLInputElement;
    setMessageValue(target.value);
  };
  const handleClickSend = (event:React.MouseEvent):void=> {
    event.preventDefault();
 

    //Valido si algún campo requerido está vacío para mostrar mensaje de error o de éxito
    if(name_value||email_value||message_value==""){
      setShowErrorMessage(true)
      setShowMessage(false);
    }
    if(name_value&&email_value&&message_value!=""){
      setShowErrorMessage(false)
      setShowMessage(true);
    }

    /*ENVIAR A API */

    setNameValue("");
    setPhoneValue(0);
    setEmailValue("");
    setMessageValue("");   
 
  };
 
    return (
     
    <div className="App">
       <header>
          <Header options={options} removemedicalicon={false}/>
          <Banner banner={banner} title="Centro de salud" subtitle="...tu salud nos importa..."/>  
       </header>
  
      <main className="main-container">
        <section>
        <article className="container-history ">
        <Typography variant="h4">
          Ven a conocernos
        </Typography>
        <article className="container-home-image">
           <img src={contact1} className="contact-image"/>
        </article>      
      
        <div className="container-contact">
       
         <Map/>
        
        <Typography variant="body1" gutterBottom className="contact-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>   
      
      </div>
        </article> 
    
        <article className="container-form"> 
        <Typography variant="h5">
          Contacta con nosotros
        </Typography>

     

        <Box
          component="form"
         
        >
          <div  className="input-form">
          <TextField value={name_value} onChange={handleChangeName} required id="outlined-basic" label="Nombre" variant="outlined" />
          </div>
          <div className="container-input"  >
            <div className="input-form-pc">         
            <TextField value={email_value} onChange={handleChangeEmail} required id="outlined-basic" label="Correo electrónico" variant="outlined" />
            </div>   
            <div className="input-form-pc">   
            <TextField value={phone_value} onChange={handleChangePhone} type="number" id="outlined-basic" label="Teléfono" variant="outlined" />
            </div>   
          </div>
          <div className="input-form-movil">         
            <TextField value={email_value} onChange={handleChangeEmail} required id="outlined-basic" label="Correo electrónico" variant="outlined" />
            </div>   
            <div className="input-form-movil">   
            <TextField value={phone_value} onChange={handleChangePhone} type="number" id="outlined-basic" label="Teléfono" variant="outlined" />
          </div>   
          <div  className="input-form">
          <TextField value={message_value} onChange={handleChangeMessage} required multiline maxRows={4} minRows={4} id="outlined-multiline-static" label="Mensaje" variant="outlined" />
          </div>
         {show_message?
              (<div>
            <Typography variant="subtitle1" color="secondary">
              Gracias por contactar con nosotros. Te responderemos lo antes posible.
            </Typography>
            </div>):
            ("")           
           }
            {show_error_message?
              (<div>
            <Typography variant="subtitle1" color="secondary">
             Rellene los campos requeridos antes de enviar.
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
  
  export default Contacto;
  