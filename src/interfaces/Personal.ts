import Persona from "../interfaces/Persona";

interface Personal extends Persona{
    codigo_personal:string,
    antiguedad:number,
    cargo:string,
    salario:number,
    codigo_dpto:number,
    derecho_ascenso:string
    }
export default Personal;