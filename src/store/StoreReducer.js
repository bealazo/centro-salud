const types={
    authLogin:"auth - login",
    authLogout:"auth - logout",
    changelistapac:"change-listapac",
    changelistasan:"change-listasan",
    changelistaper:"change-listaper",
    changelistacon:"change-listacon",
    changelistadep:"change-listadep"
}


//Estado global inicial
const initialStore={
    user:"",
    listapac:false,
    listasan:false,
    listaper:false,
    listacon:false,
    listadep:false
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
                listadep:false}
        case types.changelistasan:
             return{
                        ...state,
                        listapac:false,
                        listasan:action.payload,
                        listaper:false,
                        listacon:false,
                        listadep:false}
       case types.changelistaper:
              return{
                          ...state,
                       listapac:false,
                       listasan:false,
                        listaper:action.payload,
                          listacon:false,
                          listadep:false}
        case types.changelistacon:
                return{
                         ...state,
                         listapac:false,
                          listasan:false,
                         listaper:false,
                         listacon:action.payload,
                         listadep:false}
         case types.changelistadep:
                 return{
                            ...state,
                               listapac:false,
                             listasan:false,
                           listaper:false,
                            listacon:false,
                             listadep:action.payload}
        default:
            return state;
    }
}

export {initialStore, types};
export default StoreReducer;