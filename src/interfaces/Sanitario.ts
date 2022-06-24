import Persona from "../interfaces/Persona";

interface Sanitario extends Persona{
    categoria:string,
    especialidad:string,
    antiguedad:number,
    salario:number     
    }
export default Sanitario;