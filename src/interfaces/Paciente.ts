import Persona from "../interfaces/Persona";

interface Paciente extends Persona{
    numero_seguridad_social:number,
    codigo_historia_clinica:string      
}
export default Paciente;