import * as React from 'react';
//import '../App.css'; NO HACE FALTA, YA LA IMPORTÉ EN APP
import {Typography} from '@material-ui/core';

function Footer(){

    return(
        <div className="container-footer">

            <div>
                <Typography variant="h6">
                Copyright© Beatriz Lazo Tamayo
                </Typography>
                
            </div>
            

        </div>
    );

}
export default Footer;