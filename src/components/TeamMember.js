import * as React from 'react';
import '../App.css';
import {Typography} from '@material-ui/core';
import {Grid} from '@material-ui/core';
import {Icon} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function TeamMember(props) {

   
     if(props.position%2==0){
        return(
            
        <div className="member-wrapper-left">
            <div className="container-member">
                <img src={props.avatar} className="avatar"/>
                <div className="member-text">
                    <Typography variant="h6">
                    {props.name}
                    </Typography>        
                    <Typography variant="body1" gutterBottom>
                    {props.description}
                    </Typography>
                    <Grid >
                    <Icon color="primary" fontSize="small">facebook</Icon>
                    <InstagramIcon color="secondary" fontSize="small"/>
                    <LinkedInIcon fontSize="small"/>
                    </Grid>
                </div>
        </div>
        </div> 
        );
   }
   else {
        return(
        
        <div className="member-wrapper-rigth">
          <div className="container-member member-right-pc">
               <div className="member-text">
                    <Typography variant="h6">
                    {props.name}
                    </Typography>        
                    <Typography variant="body1" gutterBottom>
                    {props.description}
                    </Typography>
                    <Grid >
                    <Icon color="primary" fontSize="small">facebook</Icon>
                    <InstagramIcon color="secondary" fontSize="small"/>
                    <LinkedInIcon fontSize="small"/>
                    </Grid>
                </div>       
                <img src={props.avatar} className="avatar"/>         
          </div>
          <div className="container-member member-right-movil">
             <img src={props.avatar} className="avatar"/>  
               <div className="member-text">
                    <Typography variant="h6">
                    {props.name}
                    </Typography>        
                    <Typography variant="body1" gutterBottom>
                    {props.description}
                    </Typography>
                    <Grid >
                    <Icon color="primary" fontSize="small">facebook</Icon>
                    <InstagramIcon color="secondary" fontSize="small"/>
                    <LinkedInIcon fontSize="small"/>
                    </Grid>
                </div>       
                      
          </div>
      </div>
      
      
        );
    }


}
export default TeamMember;