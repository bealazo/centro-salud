const types={
    authLogin:"auth - login",
    authLogout:"auth - logout",
}


//Estado global inicial
const initialStore={
    user:""
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
        default:
            return state;
    }
}

export {initialStore, types};
export default StoreReducer;