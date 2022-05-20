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
      change_row_edit_doctor:"row_edit_doctor"
    
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
    //Listas porque no tengo conexión a api para obtenerlos de bases de datos
    pacientes:[
        {dni: '29033641M',
         nombre: "Caridad",
         apellidos:"Ballesteros Castillo",
         telefono:625789102,
         numero_seguridad_social:247295332921,
         codigo_historia_clinica:"0000000211"
        },
        {dni: '51310395V',
        nombre: "Constantino",
        apellidos:"Diaz Barrios",
        telefono:755861389,
        numero_seguridad_social:165651962891,
        codigo_historia_clinica:"0000000212"
       },
       {dni: '72088633D',
       nombre: "Enrique",
       apellidos:"Conde Huerta",
       telefono:605483756,
       numero_seguridad_social:214215400790,
       codigo_historia_clinica:"0000000213"
      },
      {dni: '75763067D',
      nombre: "Nadia",
      apellidos:"Amaya Barbero",
      telefono:714436150,
      numero_seguridad_social:148175851090,
      codigo_historia_clinica:"0000000214"
     }
    ],
    sanitarios:[
        {dni: '20569836Q',
         nombre: "Mariano",
         apellidos:"Cardenas Oliver",
         telefono:693840304,
         categoria:"Médico",
         especialidad:"Psicología",
         antiguedad:5,
         salario:36000
        },
        {dni: '30210818L',
        nombre: "Bartolome",
        apellidos:"Piñero Andreu",
        telefono:645813149,
        categoria:"Médico",
        especialidad:"Medicina Interna",
        antiguedad:2,
        salario:36000
       },
       {dni: '68215574N',
       nombre: "Sonia",
       apellidos:"Ferreira Becerra",
       telefono:689929226,
       categoria:"Enfermera",
       especialidad:"Cardiología",
       antiguedad:3,
       salario:24000
      },
      {dni: '88103187P',
         nombre: "Ana Isabel",
         apellidos:"Mata Costa",
         telefono:632121414,
         categoria:"Médico",
         especialidad:"Oftalmología",
         antiguedad:6,
         salario:36000
        }
    ],
    personal:[
        {dni: '03429966E',
         nombre: "Enric",
         apellidos:"Rivera Valls",
         telefono:706706114,
         codigo_personal:"000P3",
         antiguedad:2,
         cargo:"Ing. Informático",
         salario:20400,
         codigo_dpto:226,
         derecho_ascenso:"NO"
        },
        {dni: '24676502D',
        nombre: "Maria Trinidad",
        apellidos:"Fraile Paez",
        telefono:666172546,
        codigo_personal:"000P4",
        antiguedad:5,
        cargo:"Auxiliar",
        salario:15000,
        codigo_dpto:227,
        derecho_ascenso:"SI"
       },
       {dni: '29244719N',
       nombre: "Tamara",
       apellidos:"Roca Sastre",
       telefono:721285234,
       codigo_personal:"000P1",
       antiguedad:10,
       cargo:"Secretaria",
       salario:15000,
       codigo_dpto:224,
       derecho_ascenso:"SI"
      },
      {dni: '52170183L',
         nombre: "Saturnino",
         apellidos:"Guerra Carvajal",
         telefono:720945589,
         codigo_personal:"000P2",
         antiguedad:1,
         cargo:"Ing. Electricista",
         salario:15000,
         codigo_dpto:223,
         derecho_ascenso:"NO"
        }
    ],
    consultas:[
        {numero_consulta: 1,
        codigo_servicio:123,
        nombre_servicio:"Pediatría",
        planta:1,
       
        },
        {numero_consulta: 2,
            codigo_servicio:123,
            nombre_servicio:"Pediatría",
            planta:1,
           
       },
       {numero_consulta: 3,
        codigo_servicio:123,
        nombre_servicio:"Pediatría",
        planta:1,
       
        },
        {numero_consulta: 4,
            codigo_servicio:124,
            nombre_servicio:"Geriatría",
            planta:2,
           
       },
        {numero_consulta: 5,
            codigo_servicio:124,
            nombre_servicio:"Geriatría",
            planta:2,
        
    },
        {numero_consulta: 6,
            codigo_servicio:124,
            nombre_servicio:"Geriatría",
            planta:2
        
        },
        {numero_consulta: 7,
            codigo_servicio:125,
            nombre_servicio:"Psicología",
            planta:2
        
        },
        {numero_consulta: 8,
            codigo_servicio:125,
            nombre_servicio:"Psicología",
            planta:2
        
        },
        {numero_consulta: 9,
            codigo_servicio:125,
            nombre_servicio:"Psicología",
            planta:2
        
        },
        {numero_consulta: 10,
            codigo_servicio:126,
            nombre_servicio:"Oftalmología",
            planta:2
        
        },
        {numero_consulta: 11,
            codigo_servicio:126,
            nombre_servicio:"Oftalmología",
            planta:2
        
        },
        {numero_consulta: 12,
            codigo_servicio:126,
            nombre_servicio:"Oftalmología",
            planta:2
        
        },
        {numero_consulta: 13,
            codigo_servicio:127,
            nombre_servicio:"Cardiología",
            planta:1
        
        },
        {numero_consulta: 14,
            codigo_servicio:127,
            nombre_servicio:"Cardiología",
            planta:1
        
        },
        {numero_consulta: 15,
            codigo_servicio:127,
            nombre_servicio:"Cardiología",
            planta:1
        
        },
        {numero_consulta: 16,
            codigo_servicio:128,
            nombre_servicio:"Medicina Interna",
            planta:3
        
        },
        {numero_consulta: 17,
            codigo_servicio:128,
            nombre_servicio:"Medicina Interna",
            planta:3
        
        },
        {numero_consulta: 18,
            codigo_servicio:128,
            nombre_servicio:"Medicina Interna",
            planta:3
        
        },
        {numero_consulta: 19,
            codigo_servicio:129,
            nombre_servicio:"Reumatología",
            planta:3
        
        },
        {numero_consulta: 20,
            codigo_servicio:129,
            nombre_servicio:"Reumatología",
            planta:3
        
        },
        {numero_consulta: 21,
            codigo_servicio:129,
            nombre_servicio:"Reumatología",
            planta:3
        
        },
        {numero_consulta: 22,
            codigo_servicio:130,
            nombre_servicio:"Neumología",
            planta:3
        
        },
        {numero_consulta: 23,
            codigo_servicio:130,
            nombre_servicio:"Neumología",
            planta:3
        
        },
        {numero_consulta: 24,
            codigo_servicio:130,
            nombre_servicio:"Neumología",
            planta:3
        
        }
        
    ],
    departamentos:[
        {codigo_departamento: 223,
        nombre_departamento: "Mantenimiento",
        
        },
        {codigo_departamento: 224,
         nombre_departamento: "Recursos Humanos",
            
         },
        {codigo_departamento: 225,
         nombre_departamento: "Informática",
                
         },
        {codigo_departamento: 226,
         nombre_departamento: "Administración",
                    
        }
    ],

    //Para los datos de la fila seleccionada para la edicion
    row_edit_doctor:""
}


const StoreReducer = (state,action)=> {
    console.log(state.row_edit_doctor)
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
                adddep:false}
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
                        adddep:false}
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
                       adddep:false}
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
                       adddep:false}
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
                          adddep:false}
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
              
        default:
            return state;
    }
}

export {initialStore, types};
export default StoreReducer;