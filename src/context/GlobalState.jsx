import React, { createContext, useReducer } from "react";
//create context : it is used to create a context object, it returns a provider and a consumer
//useReducer : it is used to manage the state of the application

//Initial State
const InitialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}

//Create Context
//this line creates a context object, it returns a provider and a consumer
export const GlobalContext = createContext(InitialState);

//Provider Component
//this is a provider component, it provides the state and action to the components
export const GlobalProvider = () => {
    // JE ME SUIS ARRETE ICI
}