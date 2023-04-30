import React,{createContext,useReducer} from "react";
import AppReducer from './AppReducer';

//Initial state
const initialState={
    //any global state would go in this object
   transactions : [
  
    ]
}

//Create context-data shared between components
//in this case the data being shared is transactions
export const GlobalContext=createContext(initialState );

//Provider component
export const GlobalProvider=({ children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState);

    //Actions
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}

/*
the context is used to share data between components in a react appl
the provider component is used to wrap other components and provide them with access to the context data
*/