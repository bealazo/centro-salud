
import * as pacientes from '../data/pacientes.json';
import * as sanitarios from '../data/sanitarios.json';
import * as personal from '../data/personal.json';
import * as consultas from '../data/consultas.json';
import * as departamentos from '../data/departamentos.json';


const types={
    authLogin:"auth - login",
    authLogout:"auth - logout",

    //tipos para cambiar variable de control para cambiar las listas
    changelistapac:"change-listapac",
    changelistasan:"change-listasan",
    changelistaper:"change-listaper",
    changelistacon:"change-listacon",
    changelistadep:"change-listadep",

    //tipos para cambiar variable de control para cambiar los formularios de adición de acuerdo a la lista actual
    changeaddpac:"change-addpac",
    changeaddsan:"change-addsan",
    changeaddper:"change-addper",
    changeaddcon:"change-addcon",
    changeadddep:"change-adddep",

    //tipos para agregar nuevos elementos a las listas
    addpaclistapac:"add-paciente",
    addsanlistasan:"add-sanitario",
    addperlistaper:"add-personal",
    addconlistacon:"add-consultas",
    adddeplistadep:"add-departamentos",

      //tipos para cambiar variable de control para cambiar los formularios de edición de acuerdo a la lista actual
      changeeditpac:"change-editpac",
      changeeditsan:"change-editsan",
      changeeditper:"change-editper",
      changeeditcon:"change-editcon",
      changeeditdep:"change-editdep",

      //tipos para cambiar los datos del formulario de edicion en dependencia de la fila seleccionada
      change_row_edit_doctor:"row_edit_doctor",
      change_row_edit_pac:"row_edit_pac",
      change_row_edit_per:"row_edit_per",
      change_row_edit_con:"row_edit_con",
      change_row_edit_dep:"row_edit_dep",

      //tipo para mostrar u ocultar los gráficos
      showcharts:"show_charts"
    
}

//Estado global inicial
const initialStore={
    user:"",
    // variable de control para cambiar las listas
    listapac:false,
    listasan:false,
    listaper:false,
    listacon:false,
    listadep:false,
    //variable de control para cambiar los formularios de adición de acuerdo a la lista actual
    addpac:false,
    addsan:false,
    addper:false,
    addcon:false,
    adddep:false,
      //variable de control para cambiar los formularios de edición de acuerdo a la lista actual
      editpac:false,
      editsan:false,
      editper:false,
      editcon:false,
      editdep:false,
    //Listas que cargo desde los .json porque no tengo conexión a api para obtenerlos de bases de datos
    pacientes:pacientes.default,  
    sanitarios:sanitarios.default,
    personal:personal.default,
    consultas:consultas.default,
    departamentos:departamentos.default,

    //Para los datos de la fila seleccionada para la edicion
    row_edit_doctor:"",
    row_edit_pac:"",
    row_edit_per:"",
    row_edit_con:"",
    row_edit_dep:"",

    //Para mostrar u ocultar los gráficos
    charts:false
}


const StoreReducer = (state,action)=> {
   
   //De acuerdo a la accion recibida por parámetro modifico el estado inicial, los datos a modificar vienen en payload
    switch (action.type) {
        case types.authLogout:
            return{
                ...state,
                user:""}
        case types.authLogin:
            return{
                ...state,
                user:action.payload}
        case types.changelistapac:
            return{
                ...state,
                listapac:action.payload,
                listasan:false,
                listaper:false,
                listacon:false,
                listadep:false,
                addpac:false,
                addsan:false,
                addper:false,
                addcon:false,
                adddep:false,
                charts:false}
        case types.changelistasan:
             return{
                        ...state,
                        listapac:false,
                        listasan:action.payload,
                        listaper:false,
                        listacon:false,
                        listadep:false,
                        addpac:false,
                        addsan:false,
                        addper:false,
                        addcon:false,
                        adddep:false,
                        charts:false}
       case types.changelistaper:
              return{
                          ...state,
                       listapac:false,
                       listasan:false,
                       listaper:action.payload,
                       listacon:false,
                       listadep:false,
                       addpac:false,
                       addsan:false,
                       addper:false,
                       addcon:false,
                       adddep:false,
                       charts:false}
        case types.changelistacon:
                return{
                         ...state,
                         listapac:false,
                         listasan:false,
                         listaper:false,
                         listacon:action.payload,
                         listadep:false,
                         addpac:false,
                       addsan:false,
                       addper:false,
                       addcon:false,
                       adddep:false,
                       charts:false}
         case types.changelistadep:
                 return{
                            ...state,
                          listapac:false,
                          listasan:false,
                          listaper:false,
                          listacon:false,
                          listadep:action.payload,
                          addpac:false,
                          addsan:false,
                          addper:false,
                          addcon:false,
                          adddep:false,
                          charts:false}
                             case types.changeaddpac:
                                return{
                                    ...state,
                                    addpac:action.payload,
                                    addsan:false,
                                    addper:false,
                                    addcon:false,
                                    adddep:false}
                            case types.changeaddsan:
                                 return{
                                     ...state,
                                     addpac:false,
                                     addsan:action.payload,
                                     addper:false,
                                     addcon:false,
                                     adddep:false}
                           case types.changeaddper:
                                  return{
                                       ...state,
                                     addpac:false,
                                     addsan:false,
                                     addper:action.payload,
                                     addcon:false,
                                     adddep:false}
                            case types.changeaddcon:
                                    return{
                                       ...state,
                                      addpac:false,
                                      addsan:false,
                                      addper:false,
                                      addcon:action.payload,
                                      adddep:false}
                             case types.changeadddep:
                                     return{
                                        ...state,
                                       addpac:false,
                                       addsan:false,
                                       addper:false,
                                       addcon:false,
                                       adddep:action.payload}
                                       case types.changeeditpac:
                                        return{
                                            ...state,
                                            editpac:action.payload,
                                            editsan:false,
                                            editper:false,
                                            editcon:false,
                                            editdep:false}
                                    case types.changeeditsan:
                                         return{
                                             ...state,
                                             editpac:false,
                                             editsan:action.payload,
                                             editper:false,
                                             editcon:false,
                                             editdep:false}
                                   case types.changeeditper:
                                          return{
                                               ...state,
                                             editpac:false,
                                             editsan:false,
                                             editper:action.payload,
                                             editcon:false,
                                             editdep:false}
                                    case types.changeeditcon:
                                            return{
                                               ...state,
                                              editpac:false,
                                              editsan:false,
                                              editper:false,
                                              editcon:action.payload,
                                              editdep:false}
                                     case types.changeeditdep:
                                             return{
                                                ...state,
                                               editpac:false,
                                               editsan:false,
                                               editper:false,
                                               editcon:false,
                                               editdep:action.payload}
            case types.addpaclistapac:
                return{
                ...state,
                pacientes:action.payload.pacientes}
            case types.addsanlistasan:
                 return{
                 ...state,
                sanitarios:action.payload.sanitarios}
            case types.addperlistaper:
                 return{
                 ...state,
                 personal:action.payload.personal}
            case types.addconlistacon:
                 return{
                 ...state,
                consultas:action.payload.consultas}
            case types.adddeplistadep:
                return{
                ...state,
                departamentos:action.payload.departamentos}
          case types.change_row_edit_doctor:
                    return{
                    ...state,
                    row_edit_doctor:action.payload.row_edit_doctor}
         case types.change_row_edit_pac:
                    return{
                    ...state,
                   row_edit_pac:action.payload.row_edit_pac}
        case types.change_row_edit_per:
                    return{
                    ...state,
                    row_edit_per:action.payload.row_edit_per}
        case types.change_row_edit_con:
                    return{
                    ...state,
                     row_edit_con:action.payload.row_edit_con}
        case types.change_row_edit_dep:
                    return{
                    ...state,
                    row_edit_dep:action.payload.row_edit_dep}
         case types.showcharts:
                   return{
                   ...state,
                   listapac:false,
                   listasan:false,
                   listaper:false,
                   listacon:false,
                   listadep:false,
                   addpac:false,
                   addsan:false,
                   addper:false,
                   addcon:false,
                   adddep:false,
                   charts:action.payload}
              
        default:
            return state;
    }
}

export {initialStore, types};
export default StoreReducer;