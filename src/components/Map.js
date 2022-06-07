import * as React from "react";
import GoogleMaps from "simple-react-google-maps";
import { useMediaQuery } from "react-responsive";

function Map(){

    //Manejar ancho de la pantalla para definir ancho del mapa
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
        <div>
            { isDesktop?<GoogleMaps
            //Tengo que crearla en console.developers. google.com
            apiKey={"AIzaSyCWAvgKKSGxFhNwXa-E08_zMZCTZtKNXhI"}
            style={{width:"35vw", height:"50vh"}}
            zoom={12}
            center={{
                lat:40.4127355,
                lng:-3.6954287
            }}         
            
            />:isMobile?<GoogleMaps
            //Tengo que crearla en console.developers. google.com
            apiKey={"AIzaSyCWAvgKKSGxFhNwXa-E08_zMZCTZtKNXhI"}
            style={{width:"60vw", height:"40vh"}}
            zoom={12}
            center={{
                lat:40.4127355,
                lng:-3.6954287
            }}      
            
            />:null}
          
        </div>
    );
}
export default Map;