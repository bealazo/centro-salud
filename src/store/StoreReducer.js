const types={
    authLogin:"auth - login",
    authLogout:"auth - logout",

    changelistapac:"change-listapac",
    changelistasan:"change-listasan",
    changelistaper:"change-listaper",
    changelistacon:"change-listacon",
    changelistadep:"change-listadep",

    changeaddpac:"change-addpac",
    changeaddsan:"change-addsan",
    changeaddper:"change-addper",
    changeaddcon:"change-addcon",
    changeadddep:"change-adddep"
}


//Estado global inicial
const initialStore={
    user:"",
    listapac:false,
    listasan:false,
    listaper:false,
    listacon:false,
    listadep:false,
    addpac:false,
    addsan:false,
    addper:false,
    addcon:false,
    adddep:false
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
        default:
            return state;
    }
}

export {initialStore, types};
export default StoreReducer;