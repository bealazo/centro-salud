import * as React from 'react';
//import '../App.css'; NO HACE FALTA, YA LA IMPORTÉ EN APP
import {Typography} from '@material-ui/core';
import {Grid} from '@material-ui/core';
import {Icon} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Socials(){

    const handleClick = () => {
        console.log("di click");
    };


    return(
        <div className="container-socials">

            <div>
                <Typography variant="h5">
                ¡Síguenos en todas nuestras Redes!
                </Typography>
                                
            </div>
            <div>
                  <Grid >
                    <Icon style={{cursor:"pointer"}} onClick={handleClick} color="primary" fontSize="large">facebook</Icon>
                    <InstagramIcon color="secondary" fontSize="large" style={{cursor:"pointer"}}/>
                    <LinkedInIcon fontSize="large" style={{cursor:"pointer"}}/>
                    </Grid>
            </div>
            
            

        </div>
    );

}
export default Socials;