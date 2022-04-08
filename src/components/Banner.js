import * as React from 'react';
//import '../App.css'; NO HACE FALTA, YA LA IMPORTÉ EN APP
import {Typography} from '@material-ui/core';

function Banner(props){

   
    return(
        <div style={{backgroundImage: `url(${props.banner}) `}}  className="container-banner">
        <div className="container-banner-text">
        <Typography variant="h3">
            {props.title}
        </Typography>
        <Typography variant="h5">
           {props.subtitle}
        </Typography>
        </div>
        </div>
    );
}
export default Banner;