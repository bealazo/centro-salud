import * as React from 'react';
import {CChart} from "@coreui/react-chartjs";
import Grid from '@material-ui/core/Grid';
import {Typography} from '@material-ui/core';
import { useMediaQuery } from "react-responsive";


function Charts(){

    //Manejar ancho de la pantalla para definir ancho del grafico
    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
      const isMobile = useMediaQuery({
        query: "(max-width: 786px)"
      });
  
return(
   
    <>
    <Typography variant="h5" align="center" style={{paddingTop:"5%"}}>
    Estadísticas del centro
   </Typography>
   {isDesktop?
    <Grid container className="container-charts" spacing={5}>
                <Grid item xs={12}>           
                <CChart
                        type="line"
                        width={600} height={400}
                        data={{
                            labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
                            datasets: [
                            {
                                label: "Pacientes atendidos primer semestre",
                                backgroundColor: "rgba(220, 220, 220, 0.2)",
                                borderColor: "rgba(220, 220, 220, 1)",
                                pointBackgroundColor: "rgba(220, 220, 220, 1)",
                                pointBorderColor: "#fff",
                                data: [40, 25, 45, 39, 50, 40, 39, 80]
                            },
                        
                            ],
                        }}
                        />  
        </Grid>
         <Grid item xs={12}>
            <CChart            
                    type="bar"
                    width={600} height={400}
                    data={{
                        labels: ['Pediatría', 'Geriatría', 'Medicina interna', 'Psicología', 'Cardiología', 'Neumología', 'Reumatología'],
                        datasets: [
                        {
                            label: 'Pacientes atendidos por especialidad',
                            backgroundColor: '#f87979',
                            data: [40, 20, 12, 39, 10, 40, 39, 80],
                        },
                        ],
                    }}
                    labels="months"
                    
                        /> 
             </Grid>
         </Grid> :isMobile?
            <Grid container className="container-charts-movil" spacing={5}> 
            <Grid item xs={12}>           
            <CChart
                    type="line"
                    width={250} height={200}
                    data={{
                        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
                        datasets: [
                        {
                            label: "Pacientes atendidos primer semestre",
                            backgroundColor: "rgba(220, 220, 220, 0.2)",
                            borderColor: "rgba(220, 220, 220, 1)",
                            pointBackgroundColor: "rgba(220, 220, 220, 1)",
                            pointBorderColor: "#fff",
                            data: [40, 25, 45, 39, 50, 40, 39, 80]
                        },
                    
                        ],
                    }}
                    />  
        </Grid>
        <Grid item xs={12}>
        <CChart            
                type="bar"
                width={250} height={200}
                data={{
                    labels: ['Pediatría', 'Geriatría', 'Medicina interna', 'Psicología', 'Cardiología', 'Neumología', 'Reumatología'],
                    datasets: [
                    {
                        label: 'Pacientes atendidos por especialidad',
                        backgroundColor: '#f87979',
                        data: [40, 20, 12, 39, 10, 40, 39, 80],
                    },
                    ],
                }}
                labels="months"
                
                    /> 
        </Grid>
        </Grid> :null

    }
   {isDesktop?
     <Grid container className="container-charts">
     <Typography variant="body1" align="center">
        Rango de edades de pacientes atendidos primer semestre
    </Typography>
    
      <Grid item xs={12} >
      <CChart
            type="doughnut"
            width={450} height={300}
            data={{
              
                labels: ['0-18', '19-59', '>60'],
                datasets: [
                {
                    backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                    data: [100, 150, 200],
                },
                ],
            }}
            />
      </Grid>
    </Grid>:isMobile?
     <Grid container className="container-charts-movil">
     <Typography variant="body1" align="center">
        Rango de edades de pacientes atendidos primer semestre
    </Typography>
    
      <Grid item xs={12} >
      <CChart
            type="doughnut"
            width={250} height={200}
            data={{
              
                labels: ['0-18', '19-59', '>60'],
                datasets: [
                {
                    backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                    data: [100, 150, 200],
                },
                ],
            }}
            />
      </Grid>
    </Grid>:null
    }

    </>

);
}
export default Charts;