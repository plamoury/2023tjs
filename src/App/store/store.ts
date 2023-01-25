import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import listeReducer, { addImage } from './listes'
import currentReducer from './current'

export const uneValeurASupprimerApresImplementation="";
export const store=configureStore({
    reducer:combineReducers({listes:listeReducer,current:currentReducer}),
    devTools: true,
});

//console.log(store.getState);
//store.dispatch(addImage({h:1000,w:50,url:'dfg.jpg',id:123, name:'coucou'}))
//console.log(store.getState());