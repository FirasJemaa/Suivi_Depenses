import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
//create context : it is used to create a context object, it returns a provider and a consumer
//useReducer : it is used to manage the state of the application

//Initial State
const InitialState = {
    transactions: []
}

//Create Context
//this line creates a context object, it returns a provider and a consumer
export const GlobalContext = createContext(InitialState);

//Provider Component
//this is a provider component, it provides the state and action to the components
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, InitialState);

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}