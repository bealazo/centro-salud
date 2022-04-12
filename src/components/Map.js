import * as React from "react";
import GoogleMaps from "simple-react-google-maps";

function Map(){

    //Manejar ancho de la pantalla para definir ancho del mapa
    const screenwidth = window.screen.width;

     return(
        <div>
            <GoogleMaps
            
            apiKey={"AIzaSyCWAvgKKSGxFhNwXa-E08_zMZCTZtKNXhI"}
            style={{width:screenwidth>900?"35vw":"50vw", height:"50vh"}}
            zoom={12}
            center={{
                lat:40.4127355,
                lng:-3.6954287
            }}
            
            
            />
        </div>
    );
}
export default Map;