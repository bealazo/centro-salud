import * as React from 'react';
//import '../App.css'; NO HACE FALTA, YA LA IMPORTÉ EN APP
import {Typography} from '@material-ui/core';

//Tipado Props
type Props = {
    banner:string,
    title: string,
    subtitle: string,
  }

const Banner=({ banner, title, subtitle }:Props)=>{

   
    return(
        <div style={{backgroundImage: `url(${banner}) `}}  className="container-banner">
        <div className="container-banner-text">
        <Typography variant="h3">
            {title}
        </Typography>
        <Typography variant="h5">
           {subtitle}
        </Typography>
        </div>
        </div>
    );
}
export default Banner;