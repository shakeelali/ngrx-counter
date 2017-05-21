import { Action } from "./action.interface";
import { ActionReducer } from "@ngrx/store";

import { counterReducer } from "./counter.reducer";

import { Counter } from "./counter";

let value = 1;
const id = () => {
    return value++;
};


const incrementCounter = (state : Counter, payload_id : number ) => {
 
    return state.id === payload_id 
                ? Object.assign({}, state, { count: state.count + 1 })
                : state;

};

const decrementCounter = (state : Counter, payload_id : number ) => {

    return state.id === payload_id 
                ? Object.assign({}, state, { count: state.count - 1 })
                : state;

};

export const counterManagerReducer: ActionReducer<Counter[]> = (state: Counter[] = [], action: Action) => {
    switch (action.type) {

        case 'ADD':

            return [...state, Object.assign({}, { id: id(), count: 0 })]; // return new changed state object

        case 'REMOVE':

            return state.filter(counter => counter.id !== action.payload); // return new changed state object

        case 'INCREMENT':
            
            return state.map(counter => incrementCounter(counter, action.payload));

        case 'DECREMENT':
            
            return state.map(counter => decrementCounter(counter, action.payload));

        default:
            return state;
    }
};