import './App.css';

/*AÑADIDOS*/
import * as React from 'react';
import Layout from './navigation/Layout';
import {useEffect}from 'react';


function App() {
  //Obtengo el user que guardé en localStorage, porque estoy en Local
const [user, setUser] = React.useState("");
useEffect(() => {
  const loggedInUser = localStorage.getItem("user");
  if (loggedInUser) {         
    setUser(loggedInUser);
  }
 }, []);

   
  return (
   
          <Layout user={user}/>
      
  );
}

export default App;
